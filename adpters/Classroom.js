const { google } = require('googleapis');
const { createOAuth2Client } = require('./Auth');

class Classroom {
    async getCourses(token) {
        try {
            const oAuth2Client = createOAuth2Client(token);
            const classroom = google.classroom({ version: 'v1', auth: oAuth2Client });
            const courses = await classroom.courses.list({
                pageSize: 10,
            });
            return courses.data.courses;
        } catch (error) {
            throw error;
        }
    }

    async getCourseWork(token, courseId) {
        try {
            const oAuth2Client = createOAuth2Client(token);
            const classroom = google.classroom({ version: 'v1', auth: oAuth2Client });
            const courseWork = await classroom.courses.courseWork.list({
                courseId: courseId
            });
            return courseWork.data.courseWork;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = {
    Classroom
};
