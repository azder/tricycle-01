import {connect} from 'react-redux';

import clear$ from './clear.action.js';
import Component from './notification.component.jsx';
import trim$ from './trim.action.js';


export default connect(
    ({notifications}) => ({notifications: notifications ?? []}),
    {clear$, trim$}
)(Component);
