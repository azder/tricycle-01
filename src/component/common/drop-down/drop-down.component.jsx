import {faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import PT from 'prop-types';
import React, {useState} from 'react';
import {DELAY, delayed} from '../../../util/event.util.js';
import {tie} from '../../../util/function.util.js';
import {keyOf, valOf} from '../../../util/object.util.js';
import DropDownItem from './drop-down-item.component.jsx';
import CN from './drop-down.module.scss';
import {findThe} from './drop-down.util.js';

const {entries} = Object;

const DropDown = (


    ({label, values}) => {

        const [selected, selected$] = useState(valOf(entries(values)[0]));
        const [active, active$] = useState(false);

        // console.log('DropDown()', label, values, active, initialState, selected);

        const deactivate$ = tie(active$, false);
        const toggle$ = tie(active$, !active);

        return (
            <div className={classNames(CN.clickable, 'field')} onBlur={delayed(DELAY.short, deactivate$)}>

                <label className="label">{label}</label>

                <div className="control is-expanded has-icons-right">
                    <div className={classNames(CN.w100, 'dropdown', {'is-active': active})}>

                        <div className={classNames(CN.w100, 'dropdown-trigger')}>
                            <input
                                readOnly
                                className="input has-text-left"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                onClick={() => toggle$()}
                                value={keyOf(findThe(selected, values))}
                            />
                            <span
                                className={classNames(CN.indicator, 'icon is-right')}
                            ><FontAwesomeIcon icon={active ? faSortUp : faSortDown}/></span>
                        </div>

                        <div className={classNames(CN.w100, 'dropdown-menu')} role="menu">
                            <div className={classNames(CN.w100, 'dropdown-content')} onBlur={deactivate$}>
                                {
                                    entries(values).map(
                                        ([key, val]) => (
                                            <DropDownItem
                                                key={key}
                                                label={key}
                                                onSelect={() => {
                                                    selected$(val);
                                                    active$(false);
                                                }}
                                            />
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


);


DropDown.propTypes = {
    label:  PT.string,
    values: PT.object,
};

export default DropDown;


