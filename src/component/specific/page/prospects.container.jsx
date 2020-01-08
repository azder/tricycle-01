import {connect} from 'react-redux';
import Prospects from './prospects.component.jsx';

export default connect(
    ({prospects}) => ({prospects: prospects ?? []}),
)(Prospects);
