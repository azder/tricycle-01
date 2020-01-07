const {entries} = Object;

export const findThe = (

    (val, values = {}) => entries(values).find(([, v]) => val === v)

);
