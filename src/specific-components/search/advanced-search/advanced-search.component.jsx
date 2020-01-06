import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PT from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import FormButton from '../../../common-components/button.component.jsx';
import DropDown from '../../../common-components/drop-down/drop-down.component.jsx';
import Input from '../../../common-components/input.component.jsx';

import K from './advanced-search.constants.js';
import Cell from './cell.component.jsx';

import CN from './advanced-search.module.scss';


const AdvancedSearch = (
    () => (
        <div className="container box">

            <div className="upper level columns">
                <Cell><Input label="Prospect&nbsp;name" placeholder="Enter name or URL"/></Cell>
                <Cell><DropDown label="Platform" values={K.platform}/></Cell>
                <Cell><DropDown label="Genre" values={K.genre}/></Cell>
                <Cell><DropDown label="Status" values={K.available}/></Cell>
            </div>

            <div className={classNames(CN.lower, 'level columns')}>
                <Cell><DropDown label="Videos" values={K.videos}/></Cell>
                <Cell><DropDown label="Views" values={K.views}/></Cell>
                <Cell><DropDown label="Followers" values={K.followers}/></Cell>
                <Cell><FormButton text="Search" icon={faSearch}/></Cell>
            </div>

        </div>
    )
);

AdvancedSearch.propTypes = {
    placeholder: PT.string,
};

export default AdvancedSearch;
