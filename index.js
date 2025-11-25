//console.log("chai aur code");
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/twitter", (req, res) => {
  res.send("welcome to twitter");
});
app.get("/introduction", function (req, res) {
  res.send("alok kumar tiwari");
});
app.get("/rku", function () {
  res.send("welcome to rk university");
});
app.get("/facebook", (req, res) => {
  res.send("<h1> welcome to facebook.plz login in Facebook</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>CHAI AUR CODE</h2>");
});
// app.listen(port,()=>{
//   console.log(`Example app listerning on port ${port}`);
// }
app.listen(process.env.PORT, () => {
  console.log(`Example app listerning on port ${port}`);
});
