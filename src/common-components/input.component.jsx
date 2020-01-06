import PT from 'prop-types';
import React from 'react';


const Input = (
    ({label, placeholder}) => (
        <div className="field">
            <label className="label">{label}</label>
            <p className="control is-expanded">
                <input className="input is-fullwidth" type="text" placeholder={placeholder}/>
            </p>
        </div>
    )
);


Input.propTypes = {
    label:       PT.string,
    placeholder: PT.string,
};

export default Input;
