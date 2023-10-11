// session2
const express = require("express"); // loading library
const app = express(); // server instance

app.listen(8082, () => {
  console.log("express server call back msg");
});

// app.get("/currencies", (req, res) => {
// res.write(`<h1>msg1</h1>`)
// res.end();

// res.send(`<h1>msg1</h1>`);
// // send has internally will do res.end()
// res.json({id: 201, name: 'express'});
// })

app.get("/", (req, res) => {
  res.write(`<h1>msg 1</h1>`);
});
app.get("/currencies", (req, res) => {
  res.json(currencies);
});
app.get("/currencies/:symbol", (req, res) => {
  const symbol = req.params.symbol; // for single value
  const symbol2 = req.query.symbol; // for multiple value
});
