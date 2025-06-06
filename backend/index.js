// backend/index.js
const express = require('express');
const cors = require('cors');
const amortizationRoutes = require('./routes/amortization');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api', amortizationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
