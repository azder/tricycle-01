import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';


const Icon = (
    ({value, extra, circle}) => {

        if (!value) {
            return null;
        }


        if (!circle) {
            const cn = cnames('icon', extra);
            return (
                <span className={cn}><FontAwesomeIcon icon={value}/></span>
            );
        }


        const cn = cnames('icon fa-layers fa-fw', extra);
        return (
            <span className={cn}><FontAwesomeIcon
                style={
                    {left: '-0.25rem'} // fix for uneven alignement on stacking
                }
                size="2x"
                icon={faCircle}
            /><FontAwesomeIcon
                inverse={true}
                size="1x"
                icon={value}
            /></span>
        );

    }
);


Icon.propTypes = {
    value:  PT.object,
    extra:  PT.any,
    circle: PT.bool,
};

export default Icon;
