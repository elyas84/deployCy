const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// e.g data

const data = [
  {
    name: "Elyas",
    age: 19,
    gender: "male",
  },
  {
    name: "Jesur",
    age: 11,
    gender: "male",
  },
  {
    name: "Öykur",
    age: 6,
    gender: "male",
  },
];

app.get("/api/hello", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
