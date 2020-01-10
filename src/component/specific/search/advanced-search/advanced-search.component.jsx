import cnames from 'classnames';
import PT from 'prop-types';
import React, {useState} from 'react';
import CC from '../../../../etc/color-code.enum.js';
import {target} from '../../../../util/event.util.js';
import DropDown from '../../../common/drop-down/drop-down.component.jsx';

import FormButton from '../../../common/form-button/form-button.component.jsx';
import Input from '../../../common/input.component.jsx';

import ENUM from './advanced-search.enums.js';

import CN from './advanced-search.module.scss';
import Cell from './cell.component.jsx';


const AdvancedSearch = (
    ({search$}) => {

        const [data, save$] = useState({
            name:      '',
            platform:  '',
            genre:     '',
            available: true,
            videos:    1,
            views:     1,
            followers: 1,
        });

        const set$ = (key, val) => {
            data[key] = val;
            save$(data);
        };

        return (
            <div className="container box">

                <div className="upper level columns">
                    <Cell><Input
                        label="Prospect&nbsp;name"
                        placeholder="Enter name or URL"
                        value={data?.name}
                        onChange={event => set$('name', target(event).value)}
                    /></Cell>
                    <Cell><DropDown
                        label="Platform"
                        values={ENUM.platform}
                        onChange={val => set$('platform', val)}
                    /></Cell>
                    <Cell><DropDown
                        label="Genre"
                        values={ENUM.genre}
                        onChange={val => set$('genre', val)}
                    /></Cell>
                    <Cell><DropDown
                        label="Status"
                        values={ENUM.available}
                        onChange={val => set$('available', val)}
                    /></Cell>
                </div>

                <div className={cnames(CN.lower, 'level columns')}>
                    <Cell><DropDown
                        label="Videos"
                        values={ENUM.videos}
                        onChange={val => set$('videos', val)}
                    /></Cell>
                    <Cell><DropDown
                        label="Views"
                        values={ENUM.views}
                        onChange={val => set$('views', val)}
                    /></Cell>
                    <Cell><DropDown
                        label="Followers"
                        values={ENUM.followers}
                        onChange={val => set$('followers', val)}
                    /></Cell>
                    <Cell><FormButton
                        text="Search"
                        color={CC.primary}
                        weight="has-text-weight-bold"
                        onClick={() => search$(data)}
                    /></Cell>
                </div>

            </div>
        );
    }
);

AdvancedSearch.propTypes = {
    placeholder: PT.string,
    search$:     PT.func,
};

export default AdvancedSearch;
