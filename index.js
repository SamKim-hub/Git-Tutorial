const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/user/:id", function (req, res) {
  // const q = req.params;
  // console.log(q);
  // res.send(`user id: ${q.id}`);
  const q = req.query;
  console.log(q);
  res.json({ "user id": q.name });
});

app.get("/sound/:name", function (req, res) {
  const name = req.params.name;
  if (name === "dog") {
    res.json({ sound: "멍멍" });
  } else if (name === "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알 수 없음" });
  }
});
app.get("/cat", function (req, res) {
  res.json({ sound: "야옹" });
});

app.listen(3000);
