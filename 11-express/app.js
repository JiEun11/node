import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
import "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file", (req, res) => {});

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("/file1.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/file2", async (req, res) => {
  return fsAsync.readFile("/file2.txt").then((data) => {
    res.send(data);
  });
});

app.get("/file3", async function (req, res) {
  const data = await fsAsync.readFile("/file2.txt");
  res.send(data);
});

app.use((error) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
