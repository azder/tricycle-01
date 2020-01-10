import AT from '../etc/action-type.enum.js';

export default (

    (state, {type, load}) => {

        if (AT.favoritedProspect === type) {
            return {...state, favs: load ?? []};
        }

        if (AT.friendedProspect) {
            return {...state, friends: load ?? []};
        }

        return state ?? {favs: [], friends: []};
    }

);
