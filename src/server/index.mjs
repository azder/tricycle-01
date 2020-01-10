// README:
// this will usually be a separate project
// not just a mock server with mock database
// but for the front end purpose
// it's rolled up in a file or two in the same one


import bodyParser from 'body-parser';
import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import EC from '../etc/error-code.enum.mjs';
import SC from '../etc/status-code.enum.mjs';
import db$ from './db.mjs';
import {wrap} from './lib.mjs';

// import GENR from '../etc/genre.enum.mjs';
// import PLAT from '../etc/platform.enum.mjs';


// eslint-disable-next-line no-console
const error$ = console.error;

const onError$ = (
    (e, o) => {
        error$('Caught exception: ', e);
        error$('Exception origin:', o);
    }
);

process.on('uncaughtException', onError$);
process.on('unhandledRejection', onError$);


const BASE_DIR = dirname(fileURLToPath(import.meta.url));
const PATH = Object.freeze({
    base:     BASE_DIR,
    build:    join(BASE_DIR, '../../build'),
    index:    join(BASE_DIR, '../../build', 'index.html'),
    database: join(BASE_DIR, './database.json'),
});

const PORT = 4000;

// prime the database
db$({path: PATH.database}).catch(
    why => error$('Problem connecting to database:', why)
);

// console.log('ENUMS', PLAT, GENR,);

const app = express();
app.use(express.static(PATH.build));
app.use(bodyParser.json());


app.get(
    '/q',
    wrap(async (req, res) => {
        const db = await db$();
        return res.json({data: db.prospects(req.params)});
    })
);


app.post(
    '/me/favs',
    wrap(async (req, res) => {
        const db = await db$();
        const data = db.favorite$(req.body.data);
        return res.json({code: EC.success, data});
    })
);


app.get(
    '/',
    (req, res) => res.sendFile(PATH.index)
);


// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {

    error$(err.stack);

    // eslint-disable-next-line no-magic-numbers
    res.status(err.status || SC.server).json({
        code:    err.code || EC.server,
        message: err.message,
        data:    err.stack && err.stack.split('\n'),
    });

});

app.listen(PORT);



