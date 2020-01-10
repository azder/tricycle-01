import {connect} from 'react-redux';
import Component from './advanced-search.component.jsx';
import search$ from './search.action.js';


export default connect(
    ({criteria: {name: init}}) => ({init}),
    {search$},
)(Component);
