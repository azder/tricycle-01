import PT from 'prop-types';
import React from 'react';
import {prevented$} from '../../util/event.util.js';

const DropDownItem = (

    ({label, onSelect}) => (

        <a
            className="dropdown-item"
            href="#"
            onClick={prevented$(onSelect)}
        >{label}</a>

    )

);

DropDownItem.propTypes = {
    onSelect: PT.func,
    label:    PT.any,
};

export default DropDownItem;
