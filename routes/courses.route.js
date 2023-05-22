const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourseWork,
  getSelectedCourses,
} = require(".././controllers/clasroom.controller");

const {
  bdSaveClass,
  buscarDocente,
} = require(".././controllers/bd.controller");

router.post("/", getCourses);

router.post("/coursework", getCourseWork);
router.post("/bdSaveClass", bdSaveClass);
router.post("/buscarDocente", buscarDocente);

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
