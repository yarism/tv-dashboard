import React from 'react';
import Profile from './Profile'

const spot = ({court = "Lediga banor", available, nextAvailable, joinable, simpleDesign, faces, names}) => {
    const now = new Date();
    const nextHour = new Date();
    const nextTwoHour = new Date();
    nextHour.setHours(now.getHours()+1);
    nextTwoHour.setHours(now.getHours() + 2);
    return (
            <li className={"grid__card " + (available ? "grid__card--available" : "")}>
                {!simpleDesign &&
                    <h3 className="card__headline">{court}</h3>
                }
                <div className="player__container">
                    {available &&
                        <ul style={{ color: '#1c90dd', fontSize: '2.2rem', lineHeight: '4rem' }}>
                            <li>Bana 3</li>
                            <li>Bana 7</li>
                            <li>Bana 8</li>
                            <li>Bana 11</li>
                        </ul>
                    }
                    {!available &&
                        <React.Fragment>
                            {!simpleDesign && 
                                <div className="slot slot--first">
                                    <h4>{now.getHours()}:00 - {nextHour.getHours()}:00</h4>
                                    <div>
                                        <div className="profile__container">
                                            <Profile rank={6} />
                                            <Profile image={"43w"} rank={8} />
                                            <Profile image={"32m"} rank={7} />
                                            <Profile image={"13m"} rank={9} />
                                        </div>
                                        <span>D. Ekman, S. Lind, M. Ahlberger, M. Aronsson</span>
                                    </div>
                                </div>
                            }
                            {!nextAvailable &&
                                <div className="slot">
                                    <h4>{nextHour.getHours()}:00 - {nextTwoHour.getHours()}:00</h4>
                                    <div className="player__first">
                                        <div className={"profile__container " + (joinable ? "profile__container--joinable" : "")}>
                                            <Profile image={faces && faces[0] ? faces[0] : "48m"} rank={7} />
                                            <Profile image={faces && faces[1] ? faces[1] : "19m"} rank={8} />
                                            {joinable &&
                                                <React.Fragment>
                                                    <Profile joinable={true} />
                                                    <Profile joinable={true} />
                                                </React.Fragment>
                                            }
                                        </div>
                                        {names &&
                                            <span>{`${names[0]}, ${names[1]}`}</span>
                                        }
                                        {!names &&
                                            <span>J. Johansson, J. Hante</span>
                                        }
                                    </div>
                                </div>
                            }
                            {nextAvailable &&
                                <div className="slot">
                                    <h4>{nextHour.getHours()}:00 - {nextTwoHour.getHours()}:00</h4>
                                    <img alt="Boka med MATCHi" src="./bookwith2.png" style={{width: '100%'}} />
                                </div>
                            }
                        </React.Fragment>
                    }
                </div>

            </li>
    )
}

export default spot;