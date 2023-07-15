import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  console.log("get");
  res.send("hi");
});
app.listen(8080);
