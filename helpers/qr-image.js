var express = require("express");
var router = express.Router();
var qr = require("qr-image");

/**
 * Genera un código QR en base a URL
 * @param {(string)} url : http://c3042f1d.ngrok.io/
 * @param {(object)} res : res
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {undefined} = 9
 */
const getQr = (url, res) => {
  let code = qr.image(url, {
    type: "png",
    ec_level: "H",
    size: 10,
    margin: 0
  });
  res.setHeader("Content-type", "image/png");
  code.pipe(res);
};

module.exports = { getQr };
