import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PT from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FormButton from '../../../common/button.component.jsx';
import DropDown from '../../../common/drop-down/drop-down.component.jsx';
import Input from '../../../common/input.component.jsx';

import ENUM from './advanced-search.enums.js';
import Cell from './cell.component.jsx';

import CN from './advanced-search.module.scss';


const AdvancedSearch = (
    () => (
        <div className="container box">

            <div className="upper level columns">
                <Cell><Input label="Prospect&nbsp;name" placeholder="Enter name or URL"/></Cell>
                <Cell><DropDown label="Platform" values={ENUM.platform}/></Cell>
                <Cell><DropDown label="Genre" values={ENUM.genre}/></Cell>
                <Cell><DropDown label="Status" values={ENUM.available}/></Cell>
            </div>

            <div className={classNames(CN.lower, 'level columns')}>
                <Cell><DropDown label="Videos" values={ENUM.videos}/></Cell>
                <Cell><DropDown label="Views" values={ENUM.views}/></Cell>
                <Cell><DropDown label="Followers" values={ENUM.followers}/></Cell>
                <Cell><FormButton text="Search" icon={faSearch}/></Cell>
            </div>

        </div>
    )
);

AdvancedSearch.propTypes = {
    placeholder: PT.string,
};

export default AdvancedSearch;
