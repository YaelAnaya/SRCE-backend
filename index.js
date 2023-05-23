const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const {routerApi}  = require('./routes/router');
const app = express();

const Database = require('./dao/index')
const db = new Database()

app.use(cors());
// settings
let port = process.env.PORT || 4001;
app.set('port',process.env.PORT );
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// server routes
routerApi(app);

// add a test endpoint
app.get('/test', (req, res) => {
    res.send('Hello world');
});

// starting the server
const server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('certificate.crt'),
    passphrase: '1234'
} ,app);

server.listen(app.get('port'), () => {
    console.log(`Server listening on https://localhost:${app.get('port')}`);
    db.metodosDB.desplegarBD().then((docentes)=>{
        console.log(docentes)
    }).catch((error)=>{
        console.log(error)
    })
}).on('error', (err) => {
    console.log(err);
});