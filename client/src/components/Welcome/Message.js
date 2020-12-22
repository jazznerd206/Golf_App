import React from 'react';
import RareBird from '../Widgets/RareBird.js';
import User from '../Widgets/User.js';
import { Fade } from 'react-awesome-reveal';
import './styles.css';

function Message(props) {


    // const getAverage = attr => {
    //     console.log(attr)
    //     let count = 0;
    //     props.user.rounds.forEach(round =>
    //         count += round.attr
    //         )
    //     return count / props.user.rounds.length
    // }

    if (props.user.rounds.length === 0 ) {
        return (
            <div className="message-block">
                <h1>Designed by a golfer, for golfers.</h1>
                <Fade>
                    <div className="box">
                        <div className="box-number">
                            <p>1</p>
                        </div>
                        <div className="box-text">
                            <Fade delay={100}>
                                <p>After tracking one round, you can start receiving basic statistics in your dashboard.</p>
                            </Fade>
                        </div>
                    </div>
                </Fade>
                <Fade delay={500}>
                <div className="box">
                    <div className="box-number">
                        <p>5</p>
                    </div>
                    <div className="box-text">
                        <Fade delay={600}>
                            <p>After 5 rounds, gain access to graph data and round trends.</p>
                        </Fade>
                    </div>
                </div>
                </Fade>
                <Fade delay={1000}>
                <div className="box">
                    <div className="box-number">
                        <p>20</p>
                    </div>
                    <div className="box-text">
                        <Fade delay={1100}>
                            <p>After 20 rounds, get an estimated handicap.</p>
                        </Fade>
                    </div>
                </div>
                </Fade>

                
                <Fade delay={2000}>
                    <div className="button">Add your first round</div>
                </Fade>

            </div>
        )
    } else {
        return (
            <div className="bird-block">
                <User user={props.user}/>
                <RareBird rounds={props.user.rounds}/>
            </div>
        )
    }
}

export default Message;