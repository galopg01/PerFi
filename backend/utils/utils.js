function formatNumber(number) {
  const rounded = Math.round((number + Number.EPSILON) * 100) / 100;

  // If integer, format without decimals
  if (Number.isInteger(rounded)) {
    return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(rounded);
  }
  
  // Otherwise, format with two decimal
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(rounded);
}

module.exports = {
  formatNumber,
};