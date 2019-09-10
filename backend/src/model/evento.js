const { Schema, model } = require("mongoose");

const Evento = new Schema(
  {
    //Schema vai montar qual a estrutura do meu BD pra armazenar um DEv dentro
    NomeEvento: {
      type: String,
      required: true
    },
    Descricao: {
      type: String,
      required: true
    },
    DataEvento: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true //cria no BD o createAt e o updatedAt
  }
);

module.exports = model("Evento", Evento);
