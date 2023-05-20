const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ name: "John Doe" });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
