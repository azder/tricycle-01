// README:
// this will usually be a separate project
// not just a mock server with mock database
// but for the front end purpose
// it's rolled up in a file or two in the same one


import E from '../etc/error-code.enum.mjs';


export const int = (

    value => parseInt(value, 10)

);


export const bool = (

    value => ('true' === value || '1' === value || true === value)

);


export const toId = (

    data => {

        if (null === data || void 0 === data) {
            return '';
        }

        // eslint-disable-next-line no-underscore-dangle
        return data._id;
    }

);


export const err$ = (
    ({status, code, message}) => {

        const e = new Error(message || '');
        e.status = status || 500; // eslint-disable-line no-magic-numbers
        e.code = code || E.server;
        const [reason, , ...rest] = e.stack.split('\n');
        e.stack = [reason, ...rest].join('\n');
        throw e;
    }
);


// helper for async routes to propagate errors
export const wrap = (
    mw => (req, res, next) => {
        const promise = mw(req, res, next);
        promise.catch(next);
        return promise;
    }
);


