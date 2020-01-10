import {combineReducers} from 'redux';

import criteria from './criteria.reducer.js';
import me from './me.reducer.js';
import notifications from './notifications.reducer.js';
import prospects from './prospects.reducer.js';


export default combineReducers({
    criteria,
    prospects,
    me,
    notifications,
});
