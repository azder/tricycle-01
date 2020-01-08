import PT from 'prop-types';
import React from 'react';
import CN from './avatar.module.scss';


const Avatar = (

    ({src, alt}) => <figure className="image"><img
        className={CN.circle}
        src={src}
        alt={alt}
    /></figure>

);

Avatar.propTypes = {
    src: PT.string,
    alt: PT.string,
};

export default Avatar;
