const express = require('express');

const studentController = require('../server/controllers/studentController')
const router = express.Router();

router.get('/', studentController.getStudents, (req, res) => {
  return res.status(200).send('hello')
})


//Users/user/Desktop/SoloProject_draft/server/controllers/studentController.js
module.exports = router;