import {connect} from 'react-redux';
import Component from './fav-button.component.jsx';

import favorite$ from './favorite.action.js';

export default connect(
    null,
    {favorite$}
)(Component);
