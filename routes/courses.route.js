const express = require("express");
const router = express.Router();
const {
  getCourses,
  getCourseWork,
} = require(".././controllers/clasroom.controller");

const {
  bdSaveClass,
  buscarDocente,
  bdGetUserCourses,
  bdGetTree,
  getTareasCurso,
} = require(".././controllers/bd.controller");

router.post("/", getCourses);
router.post("/coursework", getCourseWork);
router.post("/bdSaveClass", bdSaveClass);
router.post("/buscarDocente", buscarDocente);
router.post("/bdGetTree", bdGetTree);
router.post("/bdGetUserCourses", bdGetUserCourses);
router.post("/getTareasCurso", getTareasCurso);

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
