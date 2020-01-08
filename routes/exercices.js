const express = require("express");

const router = express.Router();

const { getAge } = require("../helpers/date");
const { numberToWord } = require("../helpers/numberToWord");
const { getUf } = require("../helpers/api");

router.get("/transformarNumero/:numero", (req, res) => {
  const { numero } = req.params;
  res.send(numberToWord(numero));
});

router.get("/getuf", async (req, res) => {
  res.send(await getUf());
});

router.get("/getage/:fecha", (req, res) => {
  const { fecha } = req.params;
  res.send(`Su edad es ${getAge(fecha)}`);
});

module.exports = router;
