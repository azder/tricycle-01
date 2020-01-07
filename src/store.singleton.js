import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import root from './reducer/root.reducer.js';


const store = createStore(
    root,
    {},
    applyMiddleware(thunk)
);


// eslint-disable-next-line no-console
const log$ = console.log.bind(console, 'store.singleton/subscribe()', 'state:');
store.subscribe(() => log$(store.getState()));


export default store;
