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


const favorites = (() => data.filter(d => d.favorite));
const friends = (() => data.filter(d => d.friend));

const LIMIT = 3;

const validate = (

    ({all, id, what}) => {

        const existing = all().map(toId);

        if (LIMIT > existing.length || existing.includes(id)) {
            return;
        }

        throw err$({
            status:  SC.invalid,
            code:    EC.invalid,
            message: `Too many ${what}. Only ${LIMIT} allowed`,
        });
    }

);

const marker = (

    options => (

        ({id, active}) => {

            if (active) {
                // check if LIMIT might be exceeded
                validate({...options, id});
            }

            const {all, field} = options;
            for (const item of data) {
                item[field] = (id === toId(item) ? active : item[field]);
            }

            return all();
        }

    )

);

const favorite$ = marker({all: favorites, what: 'favorites', field: 'favorite'});
const friend$ = marker({all: friends, what: 'friends', field: 'friend'});


const db = {
    favorite$,
    favorites,
    friend$,
    friends,
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
