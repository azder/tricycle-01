import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PT from 'prop-types';
import React from 'react';


const SimpleSearch = (
    props => (

        <div className="field">
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder={props.placeholder}/>
                <span className="icon is-small is-left"><FontAwesomeIcon icon={faSearch}/></span>
            </p>
        </div>

    )
);

SimpleSearch.propTypes = {
    placeholder: PT.string,
};

export default SimpleSearch;
