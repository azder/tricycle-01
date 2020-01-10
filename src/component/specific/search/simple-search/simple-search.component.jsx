import {faSearch} from '@fortawesome/free-solid-svg-icons';
import cnames from 'classnames';
import PT from 'prop-types';
import React, {useState} from 'react';
import {target} from '../../../../util/event.util.js';
import Icon from '../../../common/icon.component.jsx';
import CN from './simple-search.module.scss';


const SimpleSearch = (
    ({placeholder, search$, init}) => {

        const [name, name$] = useState(init);

        return (
            <p className={cnames(CN.grow, 'control has-icons-left')}>
                <input
                    className="input"
                    type="text"
                    placeholder={placeholder}
                    onChange={event => name$(target(event).value)}
                    onKeyDown={e => 'Enter' === e.key && search$({name})}
                />
                <Icon extra="is-small is-left" value={faSearch}/>
            </p>
        );
    }
);

SimpleSearch.propTypes = {
    init:        PT.string,
    placeholder: PT.string,
    search$:     PT.func,
};

export default SimpleSearch;
