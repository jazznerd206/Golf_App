import React from 'react';

import './styles.css';

// COMPONENTS
// import HeaderChartOne from '../Header_Chart_One/HeaderChartOne.js';
// import HeaderChartTwo from '../Header_Chart_One/HeaderChartTwo.js';

function Header() {

    

    return (
        <div className="header-wrapper">
            <div className="header-title">
                <h1>THINK MORE.</h1>
                <h1>SWING LESS.</h1>
            </div>
            <div>
                <h2>
                    Welcome to the Rare Bird Society.
                </h2>
            </div>
            <div className="header-body">
                <div className="header-row blue">
                    <div className="header-row-left">
                        <div className="header-content">
                            <h2>Why:</h2>
                            Most golfers track certain statistics, such as greens in regulation, fairways hit, total strokes and total putts. While these figures can provide a picture of how a round was played, they provide no detail as to the quality of shots hit. As they say, there are no pictures on the scorecard.
                        </div>
                        <hr></hr>
                        <div className="header-content">
                            <h2>How:</h2>
                            Proper mental preparation allows for the body to execute its learned motion, the golf swing. Most professionals will tell you that during that less than 1 second of physical motion, they are purely in the present moment. In order to achieve that level of focus, they closely examine all components of the shot. The distance, lie, stance, wind, air pressure, shot shape, shot height... the list goes on and on. When it comes time to hit the shot, and all the factors have been taken into account, the shot becomes an eventuality, not a possibility.
                        </div>
                        <hr></hr>
                        <div className="header-content">
                            <h2>What:</h2>
                            Any golfer, at any time, can hit 1 great shot. The difference between the amateur and the professional is the ability to execute that great shot with a high level of consistency. In order to create that consistency, all the components of the shot must be calculated and committed to. Without 100% committment to the shot, it is almost guaranteed to not produce the intended result. These shots are called "anyway" shots. The goal is to eliminate, as much as possible, the "anyway" shot from your rounds.
                        </div>
                        <hr></hr>
                        <div className="header-content">
                            <h2>Solution:</h2>
                            At the Rare Bird Society, tracking your anyway shots in addition to your score will allow you to dial in where your mistakes happen. Analysis of round data will provide you with metrics you can use in future rounds.
                        </div>
                    </div>
                </div>
                {/* <div>
                    <button>
                        Learn More
                    </button>
                </div> */}
            </div>
            {/* <div className="stat-container">
                <HeaderChartOne />
                <HeaderChartTwo />
            </div> */}
        </div>
    )
}

export default Header
