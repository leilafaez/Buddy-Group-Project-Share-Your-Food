const express = require("express");
const app = express();

const records = [];

app.use(express.static("public"));
app.use(express.json());

app.post("/api/records", (req, res) => {
  const record = {
    name: req.body.name,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description || null
  }

  records.push(record);

  console.log(records);

  res.json({ status: "success" });
});

app.listen(3001, () => { console.log("Listening on port 3001..."); });