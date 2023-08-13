// Plan
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
const fs = require("fs");
const path = require("path");
const os = require("os");

const folder = process.argv[2];
// const workingDir = path.join(os.homedir(), "Pictures", folder);
const workingDir = path.parse(__filename).dir;
if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
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
fs.promises.readdir(workingDir).then(processFiles).catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      console.log("video", file);
    } else if (isCapturedFile(file)) {
      console.log("captured", file);
    } else if (isDuplicatedFile(file)) {
      console.log("duplicated", file);
    }
  });
}

function isVideoFile(file) {
  return true;
}

function isCapturedFile(file) {
  return true;
}

function isDuplicatedFile(file) {
  return true;
}
