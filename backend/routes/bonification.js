const express = require('express');
const router = express.Router();
const { calculateMonthlyPayment, interestForPeriod } = require('../utils/amortization');
const { formatNumber } = require('../utils/utils');

router.post('/bonification', (req, res) => {
  const { loanAmount, termMonths, baseRate, bonifiedRate, bonificationCost, productsBankCost = 0 } = req.body;
  if (
    typeof loanAmount !== 'number' ||
    typeof termMonths !== 'number' ||
    typeof baseRate !== 'number' ||
    typeof bonifiedRate !== 'number' ||
    typeof bonificationCost !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  // Montly payments
  const baseMonthly = calculateMonthlyPayment(loanAmount, baseRate, termMonths);
  const bonusMonthly = calculateMonthlyPayment(loanAmount, baseRate - bonifiedRate, termMonths);
  const monthlySavings = baseMonthly - bonusMonthly;
  const annualSavings = monthlySavings * 12;

  // Annual and monthly difference (bank product cost - annual savings) - product cost
  const annualDifference = (productsBankCost - annualSavings) - bonificationCost;
  const monthlyDifference = annualDifference / 12;

  // Interest saved for each year
  const savedInterestYear1 = interestForPeriod(loanAmount, termMonths, bonifiedRate, 0, 12);
  const savedInterestYear2 = interestForPeriod(loanAmount, termMonths, bonifiedRate, 12, 12);
  const savedInterestYear3 = interestForPeriod(loanAmount, termMonths, bonifiedRate, 24, 12);

  // Interest differences annually and monthly
  const annualInterestDifference1 = (productsBankCost - savedInterestYear1) - bonificationCost;
  const monthlyInterestDifference1 = annualInterestDifference1 / 12;

  const annualInterestDifference2 = (productsBankCost - savedInterestYear2) - bonificationCost;
  const monthlyInterestDifference2 = annualInterestDifference2 / 12;

  const annualInterestDifference3 = (productsBankCost - savedInterestYear3) - bonificationCost;
  const monthlyInterestDifference3 = annualInterestDifference3 / 12;

  res.json({
    baseMonthly: formatNumber(baseMonthly),
    bonusMonthly: formatNumber(bonusMonthly),
    monthlySavings: formatNumber(monthlySavings),
    annualSavings: formatNumber(annualSavings),
    productsBankCost: formatNumber(productsBankCost - annualSavings),
    bonificationCost: formatNumber(bonificationCost),
    annualDifference: formatNumber(annualDifference),
    monthlyDifference: formatNumber(monthlyDifference),
    savedInterest1: formatNumber(savedInterestYear1),
    savedInterest2: formatNumber(savedInterestYear2),
    savedInterest3: formatNumber(savedInterestYear3),
    annualInterestDifference1: formatNumber(annualInterestDifference1),
    monthlyInterestDifference1: formatNumber(monthlyInterestDifference1),
    annualInterestDifference2: formatNumber(annualInterestDifference2),
    monthlyInterestDifference2: formatNumber(monthlyInterestDifference2),
    annualInterestDifference3: formatNumber(annualInterestDifference3),
    monthlyInterestDifference3: formatNumber(monthlyInterestDifference3),
  });
});

module.exports = router;
