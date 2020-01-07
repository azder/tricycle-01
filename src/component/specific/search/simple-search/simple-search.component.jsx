import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PT from 'prop-types';
import React, {useState} from 'react';
import {prevented$, target} from '../../../../util/event.util.js';


const SimpleSearch = (
    props => {

        const {placeholder, search$, name} = props;
        const [input, input$] = useState(name);

        return (
            <form onSubmit={prevented$(() => search$(input))}>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            className="input"
                            type="text"
                            placeholder={placeholder}
                            onChange={event => input$(target(event).value)}
                        />
                        <span className="icon is-small is-left"><FontAwesomeIcon icon={faSearch}/></span>
                    </p>
                </div>
            </form>
        );
    }
);

SimpleSearch.propTypes = {
    name:        PT.string,
    placeholder: PT.string,
    search$:     PT.func,
};

export default SimpleSearch;
