module.exports = process.argv[2].toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
