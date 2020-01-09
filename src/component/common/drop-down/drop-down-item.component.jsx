import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';
import {prevented$} from '../../../util/event.util.js';
import CN from './drop-down.module.scss';


const DropDownItem = (

    ({label, onSelect}) => (

        <button
            className={cnames(CN.button, 'dropdown-item')}
            onClick={prevented$(onSelect)}
        >{label}</button>

    )

);

DropDownItem.propTypes = {
    onSelect: PT.func,
    label:    PT.any,
};

export default DropDownItem;
