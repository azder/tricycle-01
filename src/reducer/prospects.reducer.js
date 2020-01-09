import AT from '../etc/action-type.enum.js';
import {idOf} from '../util/data.util.js';

export default (

    (state, {type, load}) => {

        if (AT.prospectsFound === type) {
            return load ?? [];
        }

        if (AT.favoritedProspect === type) {

            const ids = load
                .filter(p => p.favorite)
                .map(p => idOf(p));

            return state.map(
                p => ({
                    ...p,
                    favorite: ids.includes(idOf(p)),
                })
            );
        }

        return state ?? [];
    }

);
