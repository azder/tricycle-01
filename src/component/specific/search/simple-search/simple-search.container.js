import {connect} from 'react-redux';
import Component from './simple-search.component.jsx';
import search$ from './search.action.js';


export default connect(
    ({criteria: {name}}) => ({name}),
    {search$},
)(Component);
