import EC from '../etc/error-code.enum.mjs';
import H from '../etc/header-name.enum.js';
import M from '../etc/media-type.enum.js';


const parse = (
    async (where, response) => {

        if (!response.ok) {
            // eslint-disable-next-line no-console
            console.warn('fetch.util.js', where, response);
        }

        const parsed = await response.json();
        return {
            code:    EC.ok,
            message: '',
            data:    void 0,
            ...parsed,
        };

    }
);


export const getJson = (

    async uri => {
        const response = await fetch(uri, {
            headers: {[H.accept]: M.json, [H.ctype]: M.json},
        });

        return parse('getJson()', response);
    }

);


export const postJson = (

    async (uri, data) => {

        const response = await fetch(uri, {
            method:  'POST',
            body:    JSON.stringify(data ?? {}),
            headers: {[H.accept]: M.json, [H.ctype]: M.json},
        });

        return parse('postJson()', response);
    }

);



