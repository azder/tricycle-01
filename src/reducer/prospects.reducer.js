import AT from '../etc/action-type.enum.js';

export default (

    (state, {type, load}) => {

        if (AT.prospectsFound === type) {
            return load ?? [];
        }

        return state ?? [];
    }

);
