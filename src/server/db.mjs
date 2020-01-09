// README:
// this will usually be a separate project
// but for the front end purpose
// it's rolled up in a file or two in the same one

import {promises as pfs} from 'fs';

// a mock database,
// data is kept as a module variable
// code outside will access it through functions
let data;


const prospects = () => data;


const favorites = (

    () => data.filter(d => d.favorite)

);

const favorite$ = (

    ({id, active}) => {
        for (const d of data) {
            d.favorite = (id === d._id ? active : d.favorite);
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
