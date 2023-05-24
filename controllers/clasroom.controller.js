const { Classroom } = require(".././adpters/Classroom");
const classroom = new Classroom();

const getCourses = async (req, res) => {
  const { token } = req.body;

  try {
    const courses = await classroom.getCourses(token);
    res.json({
      ok: true,
      courses: courses,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
};

const getCourseWork = async (req, res) => {
  const { token, courseId } = req.body;
  console.log(token, courseId);
  try {
    const courseWork = await classroom.getCourseWork(token, courseId);
    res.json({
      ok: true,
      courseWork: courseWork,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = {
  getCourses,
  getCourseWork,
};
