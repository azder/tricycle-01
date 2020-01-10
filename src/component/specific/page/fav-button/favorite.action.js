import AT from '../../../../etc/action-type.enum.js';
import EC from '../../../../etc/error-code.enum.mjs';
import {action} from '../../../../util/action.util.js';
import {postJson} from '../../../../util/fetch.util.js';
import {tie} from '../../../../util/function.util.js';

const favorited = tie(action, AT.favoritedProspect);
const info = tie(action, AT.notifyInfo);
const danger = tie(action, AT.notifyDanger);


export default (

    (id, active) => (

        async dispatch$ => {

            try {

                const {code, message, data} = await postJson(
                    '/me/favs',
                    {
                        message: 'post favorite status',
                        data:    {id, active},
                    }
                );

                if (EC.success === code) {
                    dispatch$(favorited(data));
                } else {
                    // eslint-disable-next-line no-console
                    console.info('favorite.action()', code, message);
                    dispatch$(info(message));
                }

            } catch (thrown) {
                const {code, message} = await thrown;
                // eslint-disable-next-line no-console
                console.error('favorite.action()', code, message);
                dispatch$(danger(message));
            }

        }

    )

);
