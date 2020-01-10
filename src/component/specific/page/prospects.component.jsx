import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';
import {INITIAL_VISIBLE} from '../../../etc/page.const.js';

import {rowsFrom} from '../../../util/array.util.js';
import {idOf} from '../../../util/data.util.js';
import Prospect from './prospect.component.jsx';
import CN from './prospects.module.scss';


const itemsPerRow = 2; // max item count per level (number of columns)

// workaround, see https://stackoverflow.com/a/38932936
// eslint-disable-next-line no-magic-numbers
const width = `${100 / itemsPerRow}%`; // width per each item/column


const Prospects = (

    ({prospects, unrolled, unroll$}) => (

        <article>
            {
                rowsFrom(itemsPerRow, prospects).map((row, index) => (
                    <div
                        className={cnames(
                            // a fix for left aligning of last row
                            // when less items than max, see fix down
                            itemsPerRow > row.length ? CN.incomplete : '',
                            'level columns'
                        )}
                        key={index}
                    >
                        {
                            row.map(item => (
                                <div
                                    className={cnames(
                                        'level-item column',
                                        {'is-hidden': item.hidden},
                                        CN.cell
                                    )}
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
            }
            {
                unrolled || INITIAL_VISIBLE > prospects.length
                    ? null
                    : <p className="container has-text-centered">
                        <button
                            className="button is-link"
                            onClick={() => unroll$()}
                        >more
                        </button>
                    </p>
            }
        </article>
    )

);


Prospects.propTypes = {
    prospects: PT.arrayOf(PT.object),
    unroll$:   PT.func,
    unrolled:  PT.bool,
};

export default Prospects;
