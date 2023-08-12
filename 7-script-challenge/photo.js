const path = require("path");
const fs = require("fs").promises;
const fsSync = require("fs");

// const targetDir = process.argv[2]; // 정리할 폴더 이름, 실행 시 받는 첫 번째 인자
const targetDir = "test";

const parsed = path.parse(__filename); // 전체 경로 분리 가능
const currentDirPath = parsed.dir; // 현재 디렉토리 경로
const targetDirPath = path.join(currentDirPath, targetDir); // 정리할 폴더의 경로
const videoDirPath = targetDirPath + "/video";

console.log(parsed);
console.log(parsed.dir);

fs.readdir(targetDir, { withFileTypes: true })
  .then((element) => isVideoFiles(element))
  .catch(console.error);

// 동영상 파일인지 체크하기
const isVideoFiles = (element) => {
  element.forEach((file) => {
    const extname = path.extname(file.name);
    if (extname === ".mp4" || extname === ".mov") {
      isVideoDir();
    }
  });
};

// 동영상 폴더 있는지 체크하기
const isVideoDir = () => {
  if (!fsSync.existsSync(videoDirPath)) {
    fs.mkdir(videoDirPath).catch(console.error);
    console.log("머임..");
  }
};
