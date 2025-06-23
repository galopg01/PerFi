// backend/utils/amortization.js

function calculateAmortizationTable(loanAmount, annualInterestRate, loanTermMonths) {
  const monthlyRate = annualInterestRate / 100 / 12;
  const monthlyPayment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanTermMonths));
  let balance = loanAmount;
  const data = [];

  let totalPrincipal = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  for (let month = 1; month <= loanTermMonths; month++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;

    if (month === loanTermMonths || Math.abs(balance) < 0.01) {
      balance = 0;
    }

    totalPrincipal += principal;
    totalInterest += interest;
    totalPayment += monthlyPayment;

    data.push({
      month: month,
      payment: formatNumber(monthlyPayment),
      principal: formatNumber(principal),
      interest: formatNumber(interest),
      balance: formatNumber(balance),
    });
  }

  data.push({
    month: 'Total',
    payment: formatNumber(totalPayment),
    principal: formatNumber(totalPrincipal),
    interest: formatNumber(totalInterest),
    balance: 0,
  });

  const columns = [
    { key: 'month', label: 'Mes' },
    { key: 'payment', label: 'Cuota' },
    { key: 'principal', label: 'Amortizado' },
    { key: 'interest', label: 'Interés' },
    { key: 'balance', label: 'Capital pendiente' }
  ];
  
  return { columns, data };
}

function formatNumber(number) {
  const formatted = new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
  return formatted === '0,00' ? 0 : formatted;
}

module.exports = calculateAmortizationTable;
