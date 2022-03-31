const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Patient must have a first name'],
  },
  middletName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Patient must have a last name'],
  },
  birthday: {
    type: Date,
    required: [true, 'Birth date is required'],
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  occupation: {
    type: String,
  },
  Phone: {
    type: String,
  },
  emergency: {
    name: {
      type: String,
    },
    relationship: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
