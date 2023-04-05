const db = require('../../models/studentModels.js')

const studentController = {}

studentController.getStudents = (req, res, next) => {
  const queryStr = `
  SELECT * FROM students
  `
  db.query(queryStr)
    .then((data) => {
      console.log(data.rows)
      res.locals.students = data.rows;
      return next();
    })
  .catch((err)=> next(err))
}


module.exports = studentController;