import {tie} from './function.util.js';
import {prop} from './object.util.js';


export const idOf = tie(prop, '_id');

export const dataOf = tie(prop, 'data');
