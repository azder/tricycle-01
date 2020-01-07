import AT from '../etc/action-type.enum.js';

export default (

    (state, {type, load}) => {

        if (AT.simpleSearch === type) {
            return {
                ...state,
                name: load?.name ?? '',
            };
        }

        return {name: ''};
    }

);
