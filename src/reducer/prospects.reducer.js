import AT from '../etc/action-type.enum.js';
import {INITIAL_VISIBLE} from '../etc/page.const.js';
import {idOf} from '../util/data.util.js';
import {tie} from '../util/function.util.js';


const mark = (

    (field, load, state) => {

        const ids = (load ?? [])
            .filter(p => p[field])
            .map(idOf);


        return state.map(
            prospect => ({
                ...prospect,
                [field]: ids.includes(idOf(prospect)),
            })
        );
    }

);


const withFavsMarked = tie(mark, 'favorite');
const withFriendsMarked = tie(mark, 'friend');


const hide = (

    (prospects = []) => (

        [...prospects].map((prospect, index) => {
            prospect.hidden = index >= INITIAL_VISIBLE;
            return prospect;
        })

    )

);


const unhide = (

    (prospects = []) => (

        [...prospects].map(prospect => {
            prospect.hidden = false;
            return prospect;
        })

    )

);


export default (

    (state, {type, load}) => {

        if (AT.prospectsFound === type) {
            return hide(load ?? []);
        }

        if (AT.favoritedProspect === type) {
            return withFavsMarked(load, state);
        }

        if (AT.friendedProspect === type) {
            return withFriendsMarked(load, state);
        }

        if (AT.unroll) {
            return unhide(state);
        }

        return state ?? [];
    }

);
