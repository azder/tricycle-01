import classNames from 'classnames';
import PT from 'prop-types';
import React from 'react';

import {rowsFrom} from '../../../util/array.util.js';
import {idOf} from '../../../util/data.util.js';
import Prospect from './prospect.component.jsx';
import CN from './prospects.module.scss';



const count = 2; // max item count per level (number of columns)

// workaround, see https://stackoverflow.com/a/38932936
// eslint-disable-next-line no-magic-numbers
const width = `${100 / count}%`; // width per each item/column



const Prospects = (

    ({prospects}) => (

        <article>{
            rowsFrom(count, prospects).map((row, index) => (
                <div
                    className={classNames(
                        // a fix for left aligning of last row
                        // when less items than max, see fix down
                        count > row.length ? CN.incomplete : '',
                        'level columns'
                    )}
                    key={index}
                >
                    {
                        row.map(item => (
                            <div
                                className="level-item column"
                                key={idOf(item)}
                                style={
                                    // works with CN.incomplete on parent
                                    // set on all columns, see fix above
                                    {width, maxWidth: width}
                                }
                            >
                                <Prospect value={item}/>
                            </div>
                        ))
                    }
                </div>
            ))
        }</article>
    )

);


Prospects.propTypes = {
    prospects: PT.arrayOf(PT.object),
};

export default Prospects;
