const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const patientRouter = require('./routes/patientRouter');

const app = express();

//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/system/patient-list', patientRouter);
module.exports = app;
