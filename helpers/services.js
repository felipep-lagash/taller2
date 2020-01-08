const fetch = require("node-fetch");

const getUf = async () => {
  const result = fetch("https://mindicador.cl/api")
    .then(res => res.json())
    .then(data => {
      return `El valor de ${data.uf.nombre} es de $ ${data.uf.valor}`;
    });
  return await result;
};

module.exports = { getUf };
