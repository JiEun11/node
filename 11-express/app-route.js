import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); //REST API에서 Body parsing 시 사용
app.use(express.urlencoded({ extended: false })); // HTML Form이라는 UI 요소에서 submit 할 때 사용
const options = {
  dotfiles: "ignore", // 숨겨진 파일은 무시
  etag: false,
  index: false,
  maxAge: "1d", // 얼마나 캐시 가능한지
  redirecct: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
app.use(express.static("public", options)); //public에 있는 리소스를 사용자가 읽을 수 있게 설정

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);
