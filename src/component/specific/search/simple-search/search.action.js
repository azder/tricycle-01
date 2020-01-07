import AT from '../../../../etc/action-type.enum.js';
import {action} from '../../../../util/action.util.js';
import {getJson} from '../../../../util/fetch.util.js';
import {tie} from '../../../../util/function.util.js';


const search = tie(action, AT.simpleSearch);
const found = tie(action, AT.prospectsFound);


export default (

    name => (

        async dispatch$ => {

            dispatch$(search({
                name,
            }));

            const response = await getJson(`/q?${name}`);


            dispatch$(found(response?.data));

        }

    )

);
