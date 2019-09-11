const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

//Conexão com o Banco
mongoose.connect(
  "mongodb+srv://admin:calendario123@calendario-smsbj.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conectado ao banco");
});

const server = express();

server.use(routes);

server.listen(3333);
