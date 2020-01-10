import {connect} from 'react-redux';
import {tie} from '../../../../util/function.util.js';
import Component from './friend-button.component.jsx';

import befriend$ from './befriend.action.js';

const friend$ = tie(befriend$, true);
const unfriend$ = tie(befriend$, false);

export default connect(
    null,
    {friend$, unfriend$}
)(Component);
