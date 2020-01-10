// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.scss';
import * as serviceWorker from './service-worker.js';
import App from './component/specific/app/app.component.jsx';
import store from './etc/store.singleton.js';


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
