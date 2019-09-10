const express = require("express");

const routes = express.Router();

routes.use(express.json());

routes.get("/", (request, response) => {
  console.log("Hello World");
});

routes.post("/event", (request, response) => {
  const { id } = request.body;
  const { title } = request.body;

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
