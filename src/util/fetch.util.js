import H from '../etc/header-name.enum.js';
import M from '../etc/media-type.enum.js';


// eslint-disable-next-line no-console
const error$ = console.error.bind(console, 'fetch.util.js');


export const getText = (

    async uri => (await fetch(uri)).text()

);


export const getJson = (

    async uri => {
        const response = await fetch(uri, {
            headers: {[H.accept]: M.json, [H.ctype]: M.json},
        });
        if (!response.ok) {
            const {statusText, status} = response;
            error$('getJson()', status, statusText); // eslint-disable-line no-console
            throw response;
        }
        return response.json();
    }

);


export const postJson = (

    async (uri, data) => {

        const response = await fetch(uri, {
            method:  'POST',
            body:    JSON.stringify(data ?? {}),
            headers: {[H.accept]: M.json, [H.ctype]: M.json},
        });

        if (!response.ok) {
            const {statusText, status} = response;
            error$('getJson()', status, statusText); // eslint-disable-line no-console
            throw response;
        }

        return response.json();
    }

);



