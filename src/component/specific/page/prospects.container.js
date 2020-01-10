import {connect} from 'react-redux';
import Component from './prospects.component.jsx';
import unroll$ from './unroll.action.js';


export default connect(
    ({prospects, me: {unrolled}}) => ({
        prospects: prospects ?? [],
        unrolled:  unrolled ?? false,
    }),
    {unroll$}
)(Component);
