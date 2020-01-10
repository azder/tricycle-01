import AT from '../../../etc/action-type.enum.js';
import {action} from '../../../util/action.util.js';
import {tie} from '../../../util/function.util.js';


const unroll = tie(action, AT.unroll);


export default (

    () => (
        dispatch$ => dispatch$(unroll())
    )

);
