export const keyOf = (([key] = []) => key);

export const valOf = (([, val] = []) => val);

export const prop = (

    (key, object) => object?.[key]

);


