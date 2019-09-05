const express = require("express");

const server = express();

server.use(express.json());

server.get("/calendario", (request, response) => {
  console.log("Hello World");
});

server.listen(3333);
