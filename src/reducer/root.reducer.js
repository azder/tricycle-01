

import {combineReducers} from 'redux';

import criteria from './criteria.reducer.js';
import prospects from './prospects.reducer.js';


export default combineReducers({
    criteria,
    prospects,
});
