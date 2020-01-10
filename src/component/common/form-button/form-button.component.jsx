import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';
import CC from '../../../etc/color-code.enum.js';
import Icon from '../icon.component.jsx';
import CN from './form-button.module.scss';


const FormButton = (

    ({icon, text, title, color, weight, onClick}) => (

        <div className={cnames(CN.grow, 'field')} onClick={onClick}>
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
    icon:    PT.object,
    text:    PT.string,
    title:   PT.string,
    color:   PT.oneOf([CC.none, CC.primary, CC.link, CC.info, CC.success, CC.warning, CC.danger]),
    weight:  PT.oneOf(['', 'has-text-weight-light', 'has-text-weight-normal', 'has-text-weight-medium', 'has-text-weight-semibold', 'has-text-weight-bold']),
    onClick: PT.func,
};

export default FormButton;
