const mongoose = require("../../database");

const ContatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: Date,
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
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
});

const Contato = mongoose.model("Contato", ContatoSchema);

module.exports = Contato;
