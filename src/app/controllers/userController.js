const express = require("express");
const authMiddleware = require("../middlewares/auth");

const Usuario = require("../models/usuario");
const Contato = require("../models/contact")
const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find().populate('contatos');
    return res.send({ usuarios });
  } catch (err) {
    return res.status(400).send({ error: "Erro em carregar os usuários" });
  }
});

router.get("/:usuarioId", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.usuarioId).populate('contatos');
    return res.send({ usuario });
  } catch (err) {
    return res.status(400).send({ error: "Erro em carregar o usuário" });
  }
});


router.get("/:usuarioId/contacts", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.usuarioId).populate('contatos');
    const contatos = usuario.contatos
    return res.send({ contatos });
  } catch (err) {
    return res.status(400).send({ error: "Erro em carregar os usuários" });
  }
});

router.put("/:usuarioId/contacts", async (req, res) => {
  try {
    const {
      contatos
    } = req.body;
    let usuario = await Usuario.findById(req.params.usuarioId).populate('contatos');
    for (const contato of contatos) {
      if (!contato._id) {
        delete contato._id
        let con = await Contato.create(contato)
        usuario.contatos.push(con._id)
      } else {
        await Contato.findOneAndUpdate({ _id: contato._id }, contato, { upsert: true, new: true });
      }
    }
    await usuario.save();
    return res.send({ usuario });

  } catch (err) {
    return res.status(400).send({ error: err });
  }

})

router.put("/:usuarioId", async (req, res) => {
  try {
    let usuario = await Usuario.findById(req.params.usuarioId).populate('contatos');
    Usuario.findOneAndUpdate({ _id: req.params.usuarioId }, req.body, { upsert: true }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send('Succesfully saved.');
    });

    await usuario.save();
    return res.send({ usuario });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use("/user", router);
