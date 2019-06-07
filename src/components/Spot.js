import React from 'react';

const spot = ({court, available}) => {
    return (
            <li className={"grid__card " + (available ? "grid__card--available" : "")}>
                <h3 className="card__headline">Bana {court} - 13:00 - 14:00</h3>
                <div className="player__container">
                    {available &&
                        <React.Fragment>
                            <img alt="Boka med MATCHi" src="./A_Logo_Slogan_01.png" style={{width: '100%', marginTop: '3rem'}} />
                        </React.Fragment>
                    }
                    {!available &&
                        <React.Fragment>
                            <div className="player__first">
                                <span>5.3 D. Crantz</span>
                                <span>5.9 H. Törminen</span>
                            </div>
                            <div className="player__second">
                                <span>4.7 R. Bocchi</span>
                                <span>5.4 J. Persson</span>
                            </div>
                        </React.Fragment>
                    }
                </div>

            </li>
    )
}

export default spot;