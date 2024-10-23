const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Exibe o dashboard administrativo
router.get('/', dashboardController.exibeDashboard);

module.exports = router;
