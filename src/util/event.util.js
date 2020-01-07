import {noop} from './function.util.js';

export const DELAY = Object.freeze({
    short:  100,
    medium: 500,
    long:   1000,
});


export const target = (

    event => event?.target

);


const missing = {preventDefault: noop};

export const prevented$ = (

    fn => (

        event => {

            (event ?? missing).preventDefault();
            return fn(event);

        }
    )

);


export const delayed = (

    (ms, fn) => (

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
