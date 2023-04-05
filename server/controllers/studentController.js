const db = require('../../models/studentModels.js')

const studentController = {}

studentController.getStudents = (req, res, next) => {
  console.log('lalala')
  return next();
}

module.exports = studentController;