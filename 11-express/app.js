import express from "express";
const app = express();

app.get("/sky/:id", (req, res, next) => {
  console.log(req.path);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);

  res.setHeader("name", "Bella");
  res.send(201).send("created");
});
app.listen(8080);
