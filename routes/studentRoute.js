const express = require('express');

const studentController = require('../server/controllers/studentController')

const router = express.Router();


router.get('/',
  studentController.getStudents,
  (req, res) => res.status(200).json(res.locals.students))

router.post('/add',
  studentController.addStudents,
  // (req,res) => res.status(200).send('yoyoyo'))
  (req, res) => res.status(200).json(res.locals.students))

//Users/user/Desktop/SoloProject_draft/server/controllers/studentController.js
module.exports = router;