// Plan
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
const fs = require("fs");
const path = require("path");
const os = require("os");

const folder = process.argv[2];
// const workingDir = path.join(os.homedir(), "Pictures", folder);
const workingDir = path.join(path.parse(__filename).dir, folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error(`Please enter folder name in ${workingDir}`);
  return;
}

// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "caputred");
const duplicatedDir = path.join(workingDir, "duplicated");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234)
// (files) => processFiles(files) 인데 인자가 같으면 processFiles로 생략 가능
fs.promises.readdir(workingDir).then(processFiles).catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXXX
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.error);
}
