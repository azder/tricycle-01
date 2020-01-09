import PT from 'prop-types';
import React from 'react';


const ProspectsTitle = (

    ({count, found}) => (
        found
            ? <p className="title is-size-5">
                <span className="has-text-weight-bold">{
                    count?.toLocaleString()
                } Prospects</span> match your criteria
            </p>
            : null
    )

);


ProspectsTitle.propTypes = {
    count: PT.number,
    found: PT.bool,
};

export default ProspectsTitle;
