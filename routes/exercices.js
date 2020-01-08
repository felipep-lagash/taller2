const express = require("express");
const router = express.Router();
const qr = require("qr-image");

const { getAge } = require("../helpers/date");
const { numberToWord } = require("../helpers/numberToWord");
const { getUf } = require("../helpers/api");
const { getQr } = require("../helpers/qr-image");

/**
 * Convierte un número en su representación en palabras
 * @param {(number)} numero : 123
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {string} = ciento veintitrés
 */
router.get("/transformarNumero/:numero", (req, res) => {
  const { numero } = req.params;
  res.send(numberToWord(numero));
});

/**
 * Retorna un texto con valor de UF del día actual
 * @param {undefined}
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {string} = El valor de Unidad de fomento (UF) es de $ 28317.25
 */
router.get("/getUf", async (req, res) => res.send(await getUf()));

/**
 * Devuelve la edad de una persona según su fecha de nacimiento
 * @param {(date)} date : 1992-09-18
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {number} = 27
 */
router.get("/getage/:fecha", (req, res) => {
  const { fecha } = req.params;
  res.send(`Su edad es ${getAge(fecha)}`);
});

/**
 * Genera un código QR en base a URL
 * @param {(string)} url : http://c3042f1d.ngrok.io/
 * @param {(object)} res : res
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {undefined} = 9
 */
router.get("/generaQr", (req, res) => {
  let url = "http://c3042f1d.ngrok.io/";
  getQr(url, res);
});

module.exports = router;
