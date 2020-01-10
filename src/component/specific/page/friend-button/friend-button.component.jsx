import {faUserMinus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import PT from 'prop-types';
import React from 'react';
import CC from '../../../../etc/color-code.enum.js';
import FormButton from '../../../common/form-button/form-button.component.jsx';


const FriendButton = (


    ({id, active, friend$, unfriend$}) => (

        active
            ? <FormButton
                title="Unfriend"
                icon={faUserMinus}
                color={CC.danger}
                onClick={() => unfriend$(id)}
            />
            : <FormButton
                title="Add as friend"
                icon={faUserPlus}
                onClick={() => friend$(id)}
            />
    )

);

FriendButton.propTypes = {
    id:        PT.string,
    active:    PT.bool,
    friend$:   PT.func,
    unfriend$: PT.func,
};


export default FriendButton;
