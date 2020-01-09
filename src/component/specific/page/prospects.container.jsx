import {connect} from 'react-redux';
import Component from './prospects.component.jsx';

export default connect(
    ({prospects}) => ({prospects: prospects ?? []}),
)(Component);
