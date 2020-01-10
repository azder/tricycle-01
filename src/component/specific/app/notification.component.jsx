import cnames from 'classnames';
import PT from 'prop-types';
import React from 'react';
import CC from '../../../etc/color-code.enum.js';
import CN from './app.module.scss';


const Notification = (

    ({notifications, clear$}) => {

        return (

            <div className={cnames(CN.toast, {'is-hidden': !notifications?.length})}>

                <button className="delete" onClick={() => clear$()}/>
                {
                    notifications?.map?.(
                        ({color, message}, index) => (
                            <p
                                key={index}
                                className={cnames(
                                    CN.message,
                                    color ?? 'is-info',
                                    'notification is-light'
                                )}
                            >
                                {message}
                            </p>
                        )
                    )
                }
            </div>

        );
    }

);


Notification.propTypes = {

    clear$: PT.func,
    trim$:  PT.func,

    notifications: PT.arrayOf(PT.shape({

        message: PT.string,

        color: PT.oneOf([
            CC.none,
            CC.primary,
            CC.link,
            CC.info,
            CC.success,
            CC.warning,
            CC.danger,
        ]),

    })),

};


export default Notification;
