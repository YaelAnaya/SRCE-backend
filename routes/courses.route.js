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

module.exports = router;
