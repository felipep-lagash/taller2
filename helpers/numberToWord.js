const writtenNumber = require("written-number");

writtenNumber.defaults.lang = "es";

/**
 * Convierte un número en su representación en palabras
 * @param {(number)} number : 123
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {string} = ciento veintitrés
 */
const numberToWord = number => {
  const word = writtenNumber(number, { lang: "es" });
  return word;
};

module.exports = { numberToWord };
