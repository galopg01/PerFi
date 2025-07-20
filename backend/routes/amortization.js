const express = require('express');
const router = express.Router();
const { calculateAmortizationTable, calculateMonthlyPayment, interestForPeriod } = require('../utils/amortization');
const { formatNumber } = require('../utils/utils');

router.post('/amortization', (req, res) => {
  const { loanAmount, interestRate, loanTerm } = req.body;
  const { columns, data } = calculateAmortizationTable(loanAmount, interestRate, loanTerm);
  res.json({ columns, data });
});

router.post('/amortizationCalculator', (req, res) => {
  const {
    loanAmount,
    loanTerm,
    interestRate,
    commission = 0,
    prepaymentAmount
  } = req.body;

  // Original data
  const originalMonthly = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  const originalInterest = interestForPeriod(loanAmount, loanTerm, interestRate, 0, loanTerm);

  // --- Prepayment to reduce term ---
  // Keeps payment, reduces term
  const newLoanAmount = loanAmount - prepaymentAmount;
  const monthlyRate = interestRate / 12 / 100;
  // New term: solve for n in the payment formula
  const newTerm = Math.log(1 - (newLoanAmount * monthlyRate) / originalMonthly) / Math.log(1 + monthlyRate) * -1;
  const newTermRounded = Math.ceil(newTerm);
  const totalInterestTerm = interestForPeriod(newLoanAmount, newTermRounded, interestRate, 0, newTermRounded, originalMonthly);


  // --- Prepayment to reduce payment ---
  // Keeps term, reduces payment
  const newMonthlyPayment = calculateMonthlyPayment(newLoanAmount, interestRate, loanTerm);
  const totalInterestPayment = interestForPeriod(newLoanAmount, loanTerm, interestRate, 0, loanTerm);

  // --- Commission calculation ---
  // Commission is a percentage over the prepaymentAmount
  const commissionAmount = prepaymentAmount * (commission / 100);

  // --- Savings ---
  const interestSavedTerm = originalInterest - totalInterestTerm - commissionAmount;
  const interestSavedPayment = originalInterest - totalInterestPayment - commissionAmount;
  
  res.json({
    original: {
      loanAmount: formatNumber(loanAmount),
      prepaymentAmount: formatNumber(prepaymentAmount),
      term: loanTerm,
      interest: formatNumber(originalInterest),
    },
    reduceTerm: {
      payment: formatNumber(originalMonthly),
      term: newTermRounded,
      interest: formatNumber(totalInterestTerm),
      interestSaved: formatNumber(interestSavedTerm),
      commission: formatNumber(commissionAmount),
    },
    reducePayment: {
      payment: formatNumber(newMonthlyPayment),
      term: loanTerm,
      interest: formatNumber(totalInterestPayment),
      interestSaved: formatNumber(interestSavedPayment),
      commission: formatNumber(commissionAmount),
    }
  });
});

module.exports = router;
