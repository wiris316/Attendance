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

studentController.addStudents = (req, res, next) => {
  // const { fName, lName } = req.body;
  const { firstname, lastname } = req.body;
  const queryParams = [firstname, lastname];
  const queryStr = `
  INSERT INTO students (firstname, lastname)
  VALUES ($1, $2)
  RETURNING *;
  `
  
  db.query(queryStr, queryParams)
    .then(data => {
      res.locals.students = data.rows[0];
      return next()
    })
    .catch((err) => next(err))
}


studentController.deleteStudent = (req, res, next) => {
  const { firstname } = req.body;
  console.log(firstname)
  const queryStr = `
  DELETE FROM students
  WHERE firstname = $1
  RETURNING *
  `
  db.query(queryStr, [firstname])
    .then(data => {
    console.log('doneeeee')
    res.locals.students = data.rows[0];
    return next();
  })
  .catch(err => console.log("errrorr in delete student"));
}

module.exports = studentController;