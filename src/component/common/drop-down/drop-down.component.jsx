import {faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';

import cnames from 'classnames';
import PT from 'prop-types';
import React, {useState} from 'react';
import {DELAY, delayed} from '../../../util/event.util.js';
import {tie} from '../../../util/function.util.js';
import {keyOf, valOf} from '../../../util/object.util.js';
import Icon from '../icon.component.jsx';
import DropDownItem from './drop-down-item.component.jsx';
import CN from './drop-down.module.scss';
import {findThe} from './drop-down.util.js';

const {entries} = Object;


const DropDown = (


    ({label, values, onChange}) => {

        const [selected, selected$] = useState(valOf(entries(values)[0]));
        const [active, active$] = useState(false);

        const deactivate$ = tie(active$, false);
        const toggle$ = tie(active$, !active);

        return (
            <div className={cnames(CN.clickable, 'field')} onBlur={delayed(DELAY.short, deactivate$)}>

                <label className="label">{label}</label>

                <div className="control is-expanded has-icons-right">
                    <div className={cnames(CN.w100, 'dropdown', {'is-active': active})}>

                        <div className={cnames(CN.w100, 'dropdown-trigger')}>

                            <input
                                readOnly
                                className="input has-text-left"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                onClick={() => toggle$()}
                                value={keyOf(findThe(selected, values))}
                            />

                            <Icon
                                extra={cnames(CN.indicator, 'is-right')}
                                value={active ? faSortUp : faSortDown}
                            />

                        </div>

                        <div className={cnames(CN.w100, 'dropdown-menu')} role="menu">
                            <div className={cnames(CN.w100, 'dropdown-content')} onBlur={deactivate$}>
                                {
                                    entries(values).map(
                                        ([key, val]) => (
                                            <DropDownItem
                                                key={key}
                                                label={key}
                                                onSelect={() => {
                                                    selected$(val);
                                                    onChange(val);
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
    label:    PT.string,
    values:   PT.object,
    onChange: PT.func,
};

export default DropDown;


