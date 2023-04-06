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
  

  // const queryStr = `
  // INSERT INTO people (firstname, lastname)
  // VALUES ('test1', 'testtest')
  // RETURNING *
  // `
  // db.query(queryStr);
}

module.exports = studentController;