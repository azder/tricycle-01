const {entries} = Object;

// eslint-disable-next-line no-shadow
export const findThe = (

    (val, values = {}) => entries(values).find(([, v]) => val === v)

);
