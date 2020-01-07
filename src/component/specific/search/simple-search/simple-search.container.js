import {connect} from 'react-redux';
import SimpleSearch from './simple-search.component.jsx';
import search$ from './search.action.js';


export default connect(
    ({criteria: {name}}) => ({name}),
    {search$},
)(SimpleSearch);
