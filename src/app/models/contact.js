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
        type: Number,
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
        type: Number,
    },
    complemento: {
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
