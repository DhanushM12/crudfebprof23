const express = require('express');
const router = express.Router();

const Student = require('../models/student');

// create a student
router.post('/create', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        company: req.body.company
    })
    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/list', async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

module.exports = router;