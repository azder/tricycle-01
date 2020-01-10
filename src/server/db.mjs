// README:
// this will usually be a separate project
// not just a mock server with mock database
// but for the front end purpose
// it's rolled up in a file or two in the same one


import {promises as pfs} from 'fs';

import EC from '../etc/error-code.enum.mjs';
import SC from '../etc/status-code.enum.mjs';
import {err$, toId} from './lib.mjs';

// a mock database,
// data is kept as a module variable
// code outside will access it through functions
let data;


const prospects = (

    ({name}) => {

        let ps = data; // eslint-disable-line init-declarations

        if (name) {
            ps = ps.filter(({name: {first, last}}) => first.includes(name) || last.includes(name));
        }

        return ps;
    }

);


const favorites = (

    () => data.filter(d => d.favorite)

);

const favorite$ = (

    ({id, active}) => {

        if (active) {
            const existing = favorites().map(f => toId(f));
            // eslint-disable-next-line no-magic-numbers
            if (2 < existing.length && !existing.includes(id)) {
                throw err$({status: SC.invalid, code: EC.invalid, message: 'too many favorites'});
            }
        }

        for (const item of data) {
            item.favorite = (id === toId(item) ? active : item.favorite);
        }
        return favorites();
    }

);


const db = {
    favorite$,
    favorites,
    prospects,
};


export default (
    async ({path} = {}) => {

        if (data) {
            return db;
        }

        const buffer = await pfs.readFile(path);
        data = JSON.parse(`${buffer}`);

        return db;

    }
);
