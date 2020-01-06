import PT from 'prop-types';
import React from 'react';

const Cell = (
    ({children}) => (
        <div className="level-item column">{
            React.Children.toArray(children)
        }</div>
    )
);

Cell.propTypes = {children: PT.element};

export default Cell;
