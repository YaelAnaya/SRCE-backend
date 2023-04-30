const { google } = require('googleapis');
const credentials = require('.././credentials.json');

function createOAuth2Client(token) {
    const oAuth2Client = new google.auth.OAuth2(
        credentials.web.client_id,
        credentials.web.client_secret,
        'https://developers.google.com/oauthplayground'
    );

    oAuth2Client.setCredentials({ refresh_token: token });

    return oAuth2Client;
}

module.exports = {
    createOAuth2Client
};
