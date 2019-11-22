const express = require("express");

const server = express();

server.get("/crud", (req, res) => {
  return res.send("hello world");
});

server.listen(3000);
