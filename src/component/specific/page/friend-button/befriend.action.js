import AT from '../../../../etc/action-type.enum.js';
import EC from '../../../../etc/error-code.enum.mjs';
import {action} from '../../../../util/action.util.js';
import {postJson} from '../../../../util/fetch.util.js';
import {tie} from '../../../../util/function.util.js';

const friended = tie(action, AT.friendedProspect);
const info = tie(action, AT.notifyInfo);
const danger = tie(action, AT.notifyDanger);


export default (

    (active, id) => (

        async dispatch$ => {

            try {

                const {code, message, data} = await postJson(
                    '/me/friends',
                    {
                        message: 'post friend status',
                        data:    {id, active},
                    }
                );

                ({
                    [EC.ok]:      () => dispatch$(friended(data)),
                    [EC.invalid]: () => {
                        // eslint-disable-next-line no-console
                        console.info('befriend.action()', code, message);
                        dispatch$(info(message));
                    },
                    [EC.server]:  () => {
                        // eslint-disable-next-line no-console
                        console.error('befriend.action()', code, message);
                        dispatch$(danger(message));
                    },
                })[code ?? EC.ok]();


            } catch (thrown) {
                const {code, message} = await thrown;
                // eslint-disable-next-line no-console
                console.error('befriend.action()', code, message);
                dispatch$(danger(message));
            }

        }

    )

);
