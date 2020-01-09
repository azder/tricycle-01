import {faStar} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Icon from '../../common/icon.component.jsx';
import CN from './prospects.module.scss';


const FavButton = (


    () => (

        <div className={CN.star}>
            <span className={CN.bg}/>
            <Icon extra={CN.ico} value={faStar}/>
        </div>

    )

);


export default FavButton;
