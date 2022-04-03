const Patient = require('../models/patientModel');
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      status: 'success',
      patients,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createPatients = async (req, res) => {
  try {
    const patients = await Patient.create(req.body);
    res.status(200).json({ status: 'successfuly created', patients });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.DeletePatients = async (req, res) => {
  try {
    const { id: takeId } = req.params;
    const patients = await Patient.findOneAndDelete({ _id: takeId });
    if (!patients) {
      return res.status(404).json({ msg: `no task with id: ${takeId}` });
    }
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.UpdatePatients = async (req, res) => {
  try {
    const { id: takeId } = req.params;
    const patients = await Patient.findOneAndUpdate({ _id: takeId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patients) {
      return res.status(404).json({ msg: `no task with id: ${takeId}` });
    }
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const { id: takeId } = req.params;
    const patients = await Patient.findOne({ _id: takeId });
    if (!patients) {
      return res.status(404).json({ msg: `no task with id: ${takeId}` });
    }
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
