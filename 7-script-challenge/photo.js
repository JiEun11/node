const path = require("path");
const fs = require("fs").promises;
const fsSync = require("fs");

// const targetDir = process.argv[2]; // 정리할 폴더 이름, 실행 시 받는 첫 번째 인자
const targetDir = "test";

const parsed = path.parse(__filename); // 전체 경로 분리 가능
const currentDirPath = parsed.dir; // 현재 디렉토리 경로
const targetDirPath = path.join(currentDirPath, targetDir); // 정리할 폴더의 경로
const videoDirPath = targetDirPath + "/video";
const capturedDirPath = targetDirPath + "/captured";
const duplicatedDirPath = targetDirPath + "/duplicated";

// console.log(parsed);
// console.log(parsed.dir);

fs.readdir(targetDir, { withFileTypes: true })
  .then((element) => doCheckFileExt(element))
  .catch(console.error);

// 어떤 파일인지 체크하기
const doCheckFileExt = (element) => {
  element.forEach((file) => {
    const extName = path.extname(file.name);
    const imgFileName = path.parse(file.name);
    // 동영상 파일인지 체크
    if (extName === ".mp4" || extName === ".mov") {
      isDirExist(videoDirPath);
      doMoveFile(videoDirPath, file.base);
    }
    // 스크린샷 or iphone에서 편집된 사진 파일인지 체크
    else if (extName === ".png" || extName === ".aae") {
      isDirExist(capturedDirPath);
      doMoveFile(capturedDirPath, file.base);
    }

    // iphone에서 사진 보정 시 생기는 파일인지 체크
    else if (imgFileName.base.includes("IMG_E")) {
      console.log(imgFileName);
      const originalImgFileBase = file.name.replace("IMG_E", "IMG_");
      isDirExist(duplicatedDirPath);
      doMoveFile(duplicatedDirPath, originalImgFileBase);
    }
  });
};

// 해당 폴더 있는지 체크하기
const isDirExist = (dirPath) => {
  if (!fsSync.existsSync(dirPath)) {
    fsSync.mkdirSync(dirPath).catch(console.error);
  }
};

// 해당 폴더로 옮기기
const doMoveFile = (dirPath, fileBase) => {
  fsSync.renameSync(
    targetDirPath + path.sep + fileBase,
    dirPath + path.sep + fileBase
  );
};
