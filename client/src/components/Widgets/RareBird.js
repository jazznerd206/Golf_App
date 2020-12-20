import React from 'react';
import Turkey from '../../Images/Turkey.jpeg';
import Albatross from '../../Images/Albatross3.jpg';
import BlackBird from '../../Images/BlackBird.jpg';
import Eagle from '../../Images/Eagle.jpg';
import Seagull from '../../Images/Seagull.jpg';
import './styles.css'


function RareBird(props) {

    const birdSetter = () => {
        let count = 0;
        props.rounds.map(round => {
            count += round.totalScore;
        })
        let average = count / props.rounds.length
        switch(true) {
            case average < 3:
                return(
                    <div className="bird">
                    <div className="bird-text">
                        <p>ALBATROSS</p>
                    </div>
                    <img src={Albatross}></img>
                    <p>{average}</p>
                    <p>Next level: ace</p>
                    </div>
                )
            case average <= 9:
                return(
                    <div className="bird">
                    <div className="bird-text">
                        <p>EAGLE</p>
                    </div>
                    <img src={Eagle}></img>
                    <p>{average}</p>
                    <p>Next level: alabtross (less than 5 mistakes per round)</p>
                    </div>
                )
            case average <= 17:
                return(
                    <div className="bird">
                    <div className="bird-text">
                        <p>BLACKBIRD</p>
                    </div>
                    <img src={BlackBird}></img>
                    <p>{average}</p>
                    <p>Next level: eagle (less than 9 mistakes per round)</p>
                    </div>
                )
            case average <= 27:
                return(
                    <div className="bird">
                    <div className="bird-text">
                        <p>SEAGULL</p>
                    </div>
                    <img src={Seagull}></img>
                    <p>{average}</p>
                    <p>Next level: blackbird (less than 18 mistakes per round (1 per hole))</p>
                    </div>
                )
            case average <= 10:
                return(
                    <div className="bird">
                    <div className="bird-text">
                        <p>TURKEY</p>
                    </div>
                    <img src={Turkey}></img>
                    <p>{average}</p>
                    <p>Next level: seagull (less than 28 mistakes per round (1.5 per hole))</p>
                    </div>
                )
        }
             
    }

    return (
        <div className="rareBird-wrapper">
            <div className="image-wrapper">
                {birdSetter()}
            </div>
            
        </div>
    )
}

export default RareBird;