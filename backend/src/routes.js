const express = require("express");
let Event = require("./model/evento");
let User = require("./model/usuario");

const routes = express.Router();

routes.use(express.json());

routes.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes.get("/", function(request, response) {
  Event.find({}, (error, eventos) => {
    if (error) {
      return response.json({
        message: error
      });
    } else {
      return response.json({
        eventos
      });
    }
  });
});

routes.get("/:_id", function(request, response) {
  const { _id } = request.params;
  Event.find({ _id }, (error, evento) => {
    if (error) {
      return response.json({
        message: error
      });
    } else {
      return response.json({
        evento
      });
    }
  });
});

routes.post("/event", (request, response) => {
  const { NomeEvento } = request.body;
  const { Descricao } = request.body;
  const { DataEvento } = request.body;

  let evento = new Event({
    NomeEvento: NomeEvento,
    Descricao: Descricao,
    DataEvento: DataEvento
  });

  evento.save(error => {
    if (error) {
      return response.json({
        message: error
      });
    } else {
      return response.json({
        evento
      });
    }
  });
});

routes.delete("/event", (request, response) => {
  const { _id } = request.body;

  Event.findByIdAndRemove(_id, function(error) {
    if (error) {
      return response.json({
        message: error
      });
    } else {
      return response.json({
        message: "Usuario apagado com sucesso"
      });
    }
  });
});

routes.put("/event", (request, response) => {
  const { _id } = request.body;
  const { Descricao } = request.body;

  Event.findOneAndUpdate({ _id }, { Descricao }, function(error, evento) {
    if (error) {
      console.log(error);
      return response.json({
        message: error
      });
    } else {
      return response.json({
        evento
      });
    }
  });
});

routes.post("/user", (request, response) => {
  console.log(request);
  const { usuario } = request.body;
  const { senha } = request.body;

  let user = new User({
    usuario: usuario,
    senha: senha
  });

  user.save(error => {
    if (error) {
      return response.json({
        message: error
      });
    } else {
      return response.json({
        user
      });
    }
  });
});

module.exports = routes;
