const express = require("express");
let event = require("./model/evento");

const routes = express.Router();

routes.use(express.json());

routes.get("/", (request, response) => {
  console.log("Hello World");
});

routes.post("/event", (request, response) => {
  var evento = new event({
    NomeEvento: "fluffy",
    Descricao: "fluffy",
    DataEvento: "fluffy"
  });

  return response.json({
    evento
  });
});

routes.delete("/event", (request, response) => {
  const { id } = request.body;
  const { title } = request.body;

  return response.json({
    id: id,
    title: title
  });
});

routes.put("/event", (request, response) => {
  const { id } = request.body;
  const { title } = request.body;

  return response.json({
    id: id,
    title: title
  });
});

module.exports = routes;
