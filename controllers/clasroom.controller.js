
const { Classroom } = require('.././adpters/Classroom');
const classroom = new Classroom();

const getCourses = (req, res) => {
    const { token } = req.body;
    console.log(token);
    classroom.getCourses(token)
        .then((response) => {
            res.json({
                ok: true,
                courses: response
            })
        }).catch((error) => {
            res.json({
                ok: false,
                error
            })
            console.log(error);
        })
}

module.exports = {
    getCourses
}