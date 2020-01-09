import PT from 'prop-types';
import React from 'react';
import Icon from '../../common/icon.component.jsx';

const Stat = (

    ({label, value, icon}) => <div className="columns is-vcentered">
        <div className="column is-narrow "><Icon
            value={icon}
            circle={true}
        /></div>
        <div className="column is-narrow">
            <p>{
                label
            }</p>
            <p className="has-text-weight-bold">{
                value.toLocaleString()
            }</p>
        </div>
    </div>

);

Stat.propTypes = {
    value: PT.number,
    label: PT.string,
    icon:  PT.object,
};

export default Stat;
