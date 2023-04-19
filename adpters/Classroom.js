const axios = require('axios')
const { google } = require('googleapis')
const credentials = require('.././credentials.json')
class Classroom {
    constructor() {
        this.oAuth2Client = new google.auth.OAuth2(
            credentials.web.client_id,
            credentials.web.client_secret,
            "https://developers.google.com/oauthplayground"
        )
    }
    getCourses = async (token) => {
        try {
            this.oAuth2Client.setCredentials({ refresh_token: token });
            const classroom = google.classroom({ version: "v1", auth: this.oAuth2Client });
            const courses = await classroom.courses.list({
                pageSize: 10,
                teacherId: "me",
                courseStates: ["ACTIVE"]
            })
            return courses.data.courses;

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    Classroom
}