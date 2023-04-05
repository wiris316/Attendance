const express = require('express');

const router = express.Router();
const studentController = require('../controllers/studentController')

router.get('/students', studentController.getStudents, (req, res) => {
  return res.status(200).json()
})