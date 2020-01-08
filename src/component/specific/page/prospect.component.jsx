import PT from 'prop-types';
import React from 'react';
import Avatar from '../../common/avatar.component.jsx';
import CN from './prospects.module.scss';


const Prospect = (
    ({value}) => {

        if (!value) {
            // TODO: alert in console there is value missing?
            return null;
        }

        const {picture, followers, views, videos, name} = value;
        return (
            <div className="card">
                <div className={CN.star}></div>
                <div className="card-content columns">
                    <div className="media column">
                        <div className="media-left">
                            <Avatar src={picture}/>
                        </div>
                    </div>
                    <div className="card-content column">
                        <p className="card-header-title has-text-weight-bold">{name?.first} {name?.last}</p>
                        <div className="columns">
                            <div className="column is-narrow"><p>O</p></div>
                            <div className="column is-narrow"><p>Followers<br/>{followers}</p></div>
                        </div>
                        <div className="columns">
                            <div className="column is-narrow"><p>O</p></div>
                            <div className="column is-narrow"><p>Views<br/>{views}</p></div>
                        </div>
                        <div className="columns">
                            <div className="column is-narrow"><p>O</p></div>
                            <div className="column is-narrow"><p>Videos<br/>{videos}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-footer-item">
                        <button className="button" type="button">View profile</button>
                    </div>
                    <div className="card-footer-item">
                        <button className="button" type="button">Add</button>
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
    }),
};

export default Prospect;
