import AT from '../../../../etc/action-type.enum.js';
import {action} from '../../../../util/action.util.js';
import {getJson} from '../../../../util/fetch.util.js';
import {tie} from '../../../../util/function.util.js';


const search = tie(action, AT.simpleSearch);
const found = tie(action, AT.prospectsFound);


export default (
    data => (
        async dispatch$ => {

            dispatch$(search(data));

            const query = Object
                .keys(data)
                .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
                .join('&');

            const response = await getJson(`/q?${query}`);

            dispatch$(found(response?.data));

        }

    )

);
