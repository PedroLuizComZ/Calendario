const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  //Schema vai montar qual a estrutura do meu BD pra armazenar um DEv dentro
  usuario: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

module.exports = model("Usuario", UsuarioSchema);
