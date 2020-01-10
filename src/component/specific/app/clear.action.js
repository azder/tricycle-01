import AT from '../../../etc/action-type.enum.js';
import {action} from '../../../util/action.util.js';
import {tie} from '../../../util/function.util.js';


const clear = tie(action, AT.clearNotifications);


export default (

    () => (
        dispatch$ => dispatch$(clear())
    )

);
