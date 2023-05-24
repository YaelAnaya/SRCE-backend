const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');
const {routerApi}  = require('./routes/router');
const app = express();

const Database = require('./dao/index')
const db = new Database()

app.use(cors());
// settings
let port = process.env.PORT || 3000;
app.set('port',port );
app.set('host', '0.0.0.0');
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// server routes
routerApi(app);

const server = http.createServer(app);

server.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server listening on https://${app.get('host')}:${app.get('port')}`);
    db.metodosDB.desplegarBD().then((docentes)=>{
        console.log(docentes)
    }).catch((error)=>{
        console.log(error)
    })
}).on('error', (err) => {
    console.log(err);
});