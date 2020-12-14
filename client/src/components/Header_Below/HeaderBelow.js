import React from 'react'
import Putting from '../../Images/putting.jpg';
import Card from '../../Images/RareBirdScoreCard.png';
import { Fade } from 'react-reveal'
import './styles.css';

function HeaderBelow() {
    return (
        <div className="page-container">
            <Fade>
                <div className="flex-row">
                    <div className="image">
                        <img src={Putting}></img>
                    </div>
                    <div className="content">
                        <h2>Pro golfers take 32 putts per round on average.</h2>
                        <p>Find your number.</p>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="content">
                        <h2></h2>
                        <p>Catch your rarest bird.</p>
                    </div>
                    <div className="image">
                        <img src={Card}></img>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default HeaderBelow;