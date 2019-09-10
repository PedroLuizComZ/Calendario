const express = require("express");
let event = require("./model/evento");

const routes = express.Router();

routes.use(express.json());

routes.get("/", (request, response) => {
  console.log("Hello World");
});

routes.post("/event", (request, response) => {
  const { id } = request.body;
  const { title } = request.body;
  const evento = new event
          evento.save( (err, evento) => {
            if (err) return console.error(err);
            evento.speak();
          });

  return response.json({
    id: id,
    title: title
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
