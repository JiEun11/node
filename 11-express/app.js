import express from "express";
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    if (true) {
      return res.send("hello");
    }
    res.send("Bella");
  },

  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("NOT AVAILABLE!@_@");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry try later");
});
app.listen(8080);
