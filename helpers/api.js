const fetch = require("node-fetch");
var config = require("./../settings/appsettings.secrets.json");
const { apiUri } = config;

/**
 * Retorna un texto con valor de UF del día actual
 * @version        1.0.0 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {string} = El valor de Unidad de fomento (UF) es de $ 28317.25
 */
const getUf = async () => {
  const result = fetch(apiUri)
    .then(res => res.json())
    .then(data => {
      return `El valor de ${data.uf.nombre} es de $ ${data.uf.valor}`;
    });
  return await result;
};

module.exports = { getUf };
