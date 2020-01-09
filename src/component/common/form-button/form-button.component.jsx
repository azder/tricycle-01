import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';
import Icon from '../icon.component.jsx';
import CN from './form-button.module.scss';


const FormButton = (

    ({icon, text, title, color, weight}) => (

        <div className={cnames(CN.grow, 'field')}>
            <p className="control is-expanded">
                <button className={cnames(color, weight, 'button is-fullwidth')} title={title}>
                    <Icon value={icon}/>
                    {text && <span>{text}</span>}
                </button>
            </p>
        </div>

    )
);


FormButton.propTypes = {
    icon:   PT.object,
    text:   PT.string,
    title:  PT.string,
    color:  PT.oneOf(['', 'is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger']),
    weight: PT.oneOf(['', 'has-text-weight-light', 'has-text-weight-normal', 'has-text-weight-medium', 'has-text-weight-semibold', 'has-text-weight-bold']),
};

export default FormButton;
