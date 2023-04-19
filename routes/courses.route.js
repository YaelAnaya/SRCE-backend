const express = require('express');
const router = express.Router();
const { getCourses } = require('.././controllers/clasroom.controller');

router.post('/', getCourses);

// router.post('/course-works',);
//
// router.post('/course-work/students',);
//
// router.post('/student', );
//
// router.post('/course-work',);
//
// router.post('/course', );
//
// router.post('/teacher',);


module.exports = router;