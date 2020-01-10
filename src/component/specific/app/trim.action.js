import AT from '../../../etc/action-type.enum.js';
import {action} from '../../../util/action.util.js';
import {tie} from '../../../util/function.util.js';


const trim = tie(action, AT.trimNotifications);


export default (

    () => (
        dispatch$ => dispatch$(trim())
    )

);
