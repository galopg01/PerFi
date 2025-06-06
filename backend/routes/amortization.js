// backend/routes/amortization.js 
const express = require('express');
const router = express.Router();
const calculateAmortizationTable = require('../utils/amortization');

router.post('/amortization', (req, res) => {
  const { loanAmount, interestRate, loanTerm } = req.body;
  const { columns, data } = calculateAmortizationTable(loanAmount, interestRate, loanTerm);
  res.json({ columns, data });
});

module.exports = router;
