import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';
import DropDown from '../../../common/drop-down/drop-down.component.jsx';

import FormButton from '../../../common/form-button/form-button.component.jsx';
import Input from '../../../common/input.component.jsx';

import ENUM from './advanced-search.enums.js';

import CN from './advanced-search.module.scss';
import Cell from './cell.component.jsx';


const AdvancedSearch = (
    () => (
        <div className="container box">

            <div className="upper level columns">
                <Cell><Input label="Prospect&nbsp;name" placeholder="Enter name or URL"/></Cell>
                <Cell><DropDown label="Platform" values={ENUM.platform}/></Cell>
                <Cell><DropDown label="Genre" values={ENUM.genre}/></Cell>
                <Cell><DropDown label="Status" values={ENUM.available}/></Cell>
            </div>

            <div className={cnames(CN.lower, 'level columns')}>
                <Cell><DropDown label="Videos" values={ENUM.videos}/></Cell>
                <Cell><DropDown label="Views" values={ENUM.views}/></Cell>
                <Cell><DropDown label="Followers" values={ENUM.followers}/></Cell>
                <Cell><FormButton text="Search" color="is-primary" weight="has-text-weight-bold"/></Cell>
            </div>

        </div>
    )
);

AdvancedSearch.propTypes = {
    placeholder: PT.string,
};

export default AdvancedSearch;
