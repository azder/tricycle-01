import {faEye, faPlay, faUserFriends, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import PT from 'prop-types';
import React from 'react';
import {idOf} from '../../../util/data.util.js';
import Avatar from '../../common/avatar.component.jsx';
import FormButton from '../../common/form-button/form-button.component.jsx';
import FavButton from './fav-button/fav-button.container.js';
import Stat from './stat.component.jsx';


const Prospect = (
    ({value}) => {

        if (!value) {
            // TODO: alert in console there is value missing?
            return null;
        }

        const {picture, followers, views, videos, name, favorite} = value;
        const id = idOf(value);

        return (
            <div className="card">

                <FavButton id={id} active={favorite}/>

                <div className="card-content columns">
                    <div className="media column">
                        <div className="media-left">
                            <Avatar src={picture}/>
                        </div>
                    </div>
                    <div className="card-content column">
                        <p className="card-header-title has-text-weight-bold">{name?.first} {name?.last}</p>
                        <Stat label="Followers" value={followers} icon={faUserFriends}/>
                        <Stat label="Views" value={views} icon={faEye}/>
                        <Stat label="Videos" value={videos} icon={faPlay}/>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-footer-item">
                        <FormButton text="View profile"/>
                    </div>
                    <div className="card-footer-item">
                        <FormButton title="Add" icon={faUserPlus}/>
                    </div>
                </div>
            </div>
        );
    }
);


Prospect.propTypes = {
    value: PT.shape({
        name:      PT.objectOf(PT.string),
        picture:   PT.string,
        followers: PT.number,
        views:     PT.number,
        videos:    PT.number,
        favorite:  PT.bool,
    }),
};

export default Prospect;
