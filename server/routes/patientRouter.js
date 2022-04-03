const express = require('express');
const patientControllers = require('../controllers/patientController');
const {
  getAllPatients,
  createPatients,
  DeletePatients,
  UpdatePatients,
  getPatients,
} = patientControllers;

const router = express.Router();

router.route('/').get(getAllPatients).post(createPatients);
router
  .route('/:id')
  .patch(UpdatePatients)
  .delete(DeletePatients)
  .get(getPatients);

module.exports = router;
