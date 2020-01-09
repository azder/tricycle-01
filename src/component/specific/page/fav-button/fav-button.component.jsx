import {faStar} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Icon from '../../../common/icon.component.jsx';
import CN from '../prospects.module.scss';
import PT from 'prop-types';
import cnames from 'classnames';


const FavButton = (


    ({id, active, favorite$}) => (

        <div
            className={cnames(CN.star, {[CN.favorited]: active})}
            onClick={() => favorite$(id, !active)}
        >
            <span className={CN.bg}/>
            <Icon extra={CN.ico} value={faStar}/>
        </div>

    )

);

FavButton.propTypes = {
    id:        PT.string,
    active:    PT.bool,
    favorite$: PT.func,
};


export default FavButton;
