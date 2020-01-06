/** @type {function():undefined} */
export const noop = (

    () => void 0

);


/** @type {function(*):*} */
export const identity = (

    $ => $

);


/** @type {function(Function?, ...[*]): Function} */
export const tie = (

    (fn, ...args) => (fn ?? noop).bind(null, ...args)

);
