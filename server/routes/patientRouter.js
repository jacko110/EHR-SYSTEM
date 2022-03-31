const express = require('express');
const patientControllers = require('../controllers/patientController');
const { getAllPatients } = patientControllers;

const router = express.Router();

router.route('/').get(getAllPatients);

module.exports = router;
