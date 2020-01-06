import {noop} from './function.util.js';

export const DELAY = Object.freeze({
    short:  100,
    medium: 500,
    long:   1000,
});


const missing = {preventDefault: noop};

export const prevented$ = (

    fn => (

        // eslint-disable-next-line no-shadow
        event => {

            (event ?? missing).preventDefault();
            return fn(event);

        }
    )

);


export const delayed = (

    (ms, fn) => (

        // eslint-disable-next-line no-shadow
        event => {
            event.persist();
            return new Promise(resolve => {
                setTimeout(() => {
                    fn();
                    resolve();
                }, ms);
            });
        }

    )
);
