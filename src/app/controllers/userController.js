const express = require("express");
const authMiddleware = require("../middlewares/auth");

const Usuario = require("../models/usuario");

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    return res.send({ usuarios });
  } catch (err) {
    return res.status(400).send({ error: "Erro em carregar os usuários" });
  }
});

router.get("/:usuarioId", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.usuarioId);
    return res.send({ usuario });
  } catch (err) {
    return res.status(400).send({ error: "Erro em carregar o usuário" });
  }
});

router.put("/:usuarioId", async (req, res) => {
  try {
    const {
      email,
      nome,
      sobrenome,
      dataNascimento,
      telefone,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
      contatos,
    } = req.body;

    var usuario = await Usuario.findById(req.params.usuarioId);
    if (email != usuario.email) {
      if (await Usuario.findOne({ email })) {
        return res.status(400).send({ error: "e-mail já cadastrado" });
      }
    }

    usuario.email = email;
    usuario.nome = nome;
    usuario.sobrenome = sobrenome;
    usuario.dataNascimento = dataNascimento;
    usuario.telefone = telefone;
    usuario.estado = estado;
    usuario.cidade = cidade;
    usuario.bairro = bairro;
    usuario.rua = rua;
    usuario.numero = numero;
    usuario.complemento = complemento;
    usuario.contatos = contatos;

    await usuario.save();
    return res.send({ usuario });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use("/user", router);
