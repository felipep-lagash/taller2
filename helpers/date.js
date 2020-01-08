/**
 * Devuelve la edad de una persona según su fecha de nacimiento
 * @param {(date)} date : 1992-09-18
 * @version        1.4.1 - 01-08-2020
 * @author         Felipe Pulgar
 * @returns {number} = 27
 */
const getAge = date => {
  const newDate = new Date(date);
  const today = new Date();
  let age = 0;

  if (
    today.getMonth() + 1 >= newDate.getMonth() &&
    today.getDate() >= newDate.getDate()
  ) {
    age = today.getFullYear() - newDate.getFullYear();
  } else {
    age = today.getFullYear() - 1 - newDate.getFullYear();
  }
  if (age < 0) {
    return 0;
  }
  return age;
};

module.exports = { getAge };
