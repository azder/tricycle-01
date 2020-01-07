// README:
// this will usually be a separate project
// but for the front end purpose
// it's rolled up in a file or two in the same one

import express from 'express';
import {promises as fs} from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';


import PLAT from '../etc/platform.enum.mjs';
import GENR from '../etc/genre.enum.mjs';

const BASE_DIR = dirname(fileURLToPath(import.meta.url));
const PATH = Object.freeze({
    base:     BASE_DIR,
    build:    join(BASE_DIR, '../../build'),
    index:    join(BASE_DIR, '../../build', 'index.html'),
    database: join(BASE_DIR, './database.json'),
});

const PORT = 4000;


console.log('ENUMS', PLAT, GENR);

const app = express();
app.use(express.static(PATH.build));

app.get(
    '/q',
    async (req, res) => {
        const buffer = await fs.readFile(PATH.database);
        const data = JSON.parse(`${buffer}`);
        return res.json({data});
    }
);

app.get(
    '/',
    (req, res) => void res.sendFile(PATH.index)
);


app.listen(PORT);
