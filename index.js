//using common js module
const express = require("express");

// create our express app
const app = express();

// set up some route handlers
app.get("/", (req, res) => {
  res.send({
    hi: "Hello there"
  });
});

// create a dynamic port
const PORT = process.env.PORT || 5000;

// listen to PORT
app.listen(PORT);
