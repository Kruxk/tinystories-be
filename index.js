const express = require("express");
const app = express();
const corsMiddleWare = require("cors");

const PORT = 4000;

//bodyparser
app.use(express.json());
//cors middleware
app.use(corsMiddleWare);

// testing endpoint
app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
