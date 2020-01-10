import AT from '../etc/action-type.enum.js';

export default (

    (state, {type, load}) => {

        if (AT.favoritedProspect === type) {
            return {...state, favs: load ?? []};
        }

        if (AT.friendedProspect === type) {
            return {...state, friends: load ?? []};
        }

        if (AT.unroll === type) {
            return {...state, unrolled: true};
        }

        if (AT.simpleSearch === type || AT.advancedSearch === type) {
            return {...state, unrolled: false};
        }

        return state ?? {favs: [], friends: [], unrolled: true};
    }

);
