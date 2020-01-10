import AT from '../etc/action-type.enum.js';
import {idOf} from '../util/data.util.js';
import {tie} from '../util/function.util.js';


const mark = (

    (field, load, state) => {

        const ids = (load ?? [])
            .filter(p => p[field])
            .map(idOf);

        return state.map(
            p => ({
                ...p,
                [field]: ids.includes(idOf(p)),
            })
        );
    }

);


const withFavsMarked = tie(mark, 'favorite');
const withFriendsMarked = tie(mark, 'friend');


export default (

    (state, {type, load}) => {

        if (AT.prospectsFound === type) {
            return load ?? [];
        }

        if (AT.favoritedProspect === type) {
            return withFavsMarked(load, state);
        }

        if (AT.friendedProspect === type) {
            return withFriendsMarked(load, state);
        }

        return state ?? [];
    }

);
