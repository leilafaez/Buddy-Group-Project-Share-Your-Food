const express = require("express");
const app = express();

const records = [];

app.use(express.static("public"));
app.use(express.json());

app.post("/api/records", (req, res) => {
  records.push(req.body);

  console.log(records);

  res.json({ status: "success" });
});

app.listen(3001, () => { console.log("Listening on port 3001..."); });