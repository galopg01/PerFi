function formatNumber(number) {
  const formatted = new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
  return formatted === '0,00' ? 0 : formatted;
}

module.exports = {
  formatNumber,
};