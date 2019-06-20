import React from 'react';

const profile = ({ rank = "8", image = "34m", joinable }) => {
    return (
        <div className="profile">
            {joinable &&
                <div className="profile__image__container profile__image__container--joinable" joinable={"+"}>
                    <img className="profile__image"></img>
                </div>
            }
            {!joinable &&
                <div className="profile__image__container" rank={rank}>
                    <img className="profile__image" alt="person" src={`./x80/${image}.jpg`}></img>
                </div>
            }
        </div>
    )
}

export default profile;