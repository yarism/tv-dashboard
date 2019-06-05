import React from 'react';

const spot = available => {
    return (
            <li className={"grid__card " + (available ? "grid__card--available" : "")}>
                <h3 className="card__headline">Bana 12 - 13:00 - 14:00</h3>
                <div className="player__container">
                    <div>Boka via MATCHi</div>
                    <img src="./A_Logo_Slogan_01.png" style={{width: '100%'}} />
                </div>
            </li>
    )
}

export default spot;