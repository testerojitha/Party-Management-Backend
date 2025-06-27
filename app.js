const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const individualRoutes = require('./routes/individualRoutes');
const organizationRoutes = require('./routes/organizationRoutes');

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(console.error);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'TMF632 Party Management API',
    version: '1.0.0',
    status: 'healthy',
    endpoints: {
      individuals: '/tmf-api/party/v5/individual',
      organizations: '/tmf-api/party/v5/organization'
    }
  });
});

// API Routes
app.use('/tmf-api/party/v5/individual', individualRoutes);
app.use('/tmf-api/party/v5/organization', organizationRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong!' : err.message
  });
});

module.exports = app;