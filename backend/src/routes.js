const express = require("express");
let Event = require("./model/evento");

const routes = express.Router();

routes.use(express.json());

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

module.exports = routes;
