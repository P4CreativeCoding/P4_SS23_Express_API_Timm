const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

const byeMessage = [
  "Tschau Kakao",
  "adele",
  "tschö mit ö",
  "paris, athen, auf wiedersehn",
  "man siebt sich",
];

app.use(express.json());

app.get("/byeMessage", (req, res) => {
  const randomBye = Math.floor(Math.random() * byeMessage.length);
  console.log("randomBye", randomBye);
  res.status(200).send({ Verabschiedung: byeMessage[randomBye] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
