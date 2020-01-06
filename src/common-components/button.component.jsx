import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import PT from 'prop-types';


const FormButton = (

    ({icon, text}) => (

        <div className="field">
            <p className="control is-expanded">
                <button className="button is-info is-fullwidth">
                    <span className="icon"><FontAwesomeIcon icon={icon}/></span>
                    <span>{text}</span>
                </button>
            </p>
        </div>

    )
);


FormButton.propTypes = {
    icon: PT.object,
    text: PT.string,
};

export default FormButton;
