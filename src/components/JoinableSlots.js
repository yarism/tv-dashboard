import React from 'react';

import Spot from './Spot';

const JoinableSlots = props => {
    return (
        <div>
            <h1>Speltillfällen idag</h1>
            <div className="joinable__container">
                <Spot simpleDesign={true} joinable={true} names={['D. Ekman', 'P. Ekström']} faces={['08m', '01w']} />
                <Spot simpleDesign={true} joinable={true} names={['S. Lind', 'A. Ljungqvist']} faces={['07w', '11m']} />
                <Spot simpleDesign={true} joinable={true} names={['M. Lundström', 'V. Lindhé']} faces={['13m', '14m']} />
                <Spot simpleDesign={true} joinable={true} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '16rem' }}><img src="./poweredbyM.png" /></div>
        </div>
    )
}

export default JoinableSlots;