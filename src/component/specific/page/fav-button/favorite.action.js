import AT from '../../../../etc/action-type.enum.js';
import {action} from '../../../../util/action.util.js';
import {postJson} from '../../../../util/fetch.util.js';
import {tie} from '../../../../util/function.util.js';


const favorited = tie(action, AT.favoritedProspect);


export default (

    (id, active) => (

        async dispatch$ => {

            const response = await postJson(
                '/me/favs',
                {
                    message: 'post favorite status',
                    data:    {id, active},
                }
            );

            dispatch$(favorited(response?.data));

        }

    )

);
