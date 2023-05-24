const { google } = require('googleapis');
require('dotenv').config();
function createOAuth2Client(token) {
    const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        'https://developers.google.com/oauthplayground'
    );

    oAuth2Client.setCredentials({ refresh_token: token });

    return oAuth2Client;
}

module.exports = {
    createOAuth2Client
};
