const express = require('express');
const router = express.Router();
const technicianController = require('./technicains.controler');

// Route to add technicians
router.post('/technicians', technicianController.postTechnicians);

// Route to get all technicians
// router.get('/technicians', technicianController.getTechnicians);

module.exports = router;
