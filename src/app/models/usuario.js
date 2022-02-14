const mongoose = require("../../database");

const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },
  senhaResetToken: {
    type: String,
    select: false,
  },
  senhaResetExpires: {
    type: Date,
    select: false,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  rua: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
  },
  complemento: {
    type: String,
  },
  contatos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contato',
    default: []
  }],
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
