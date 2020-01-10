import {connect} from 'react-redux';
import Component from './prospects-title.component.jsx';

export default connect(
    ({prospects, criteria}) => {

        const count = prospects?.length ?? 0;
        const {length} = Object.entries(criteria ?? {}).filter(([, v]) => v);
        const found = !!(count || length);

        return ({
            count,
            found,
        });
    },
)(Component);
