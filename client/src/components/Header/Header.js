import React from 'react';
import Login from '../Login/Login';
import { Zoom, Fade } from 'react-reveal';
import './styles.css';

function Header(props) {

    

    return (
        <div className="header-wrapper">
            {/* <Navbar /> */}
            <div className="tag">
                <Zoom>
                    <div className="motion">
                        Track your scores
                    </div>
                </Zoom>
                <Zoom delay={250}>
                    <div className="motion">
                        See your stats
                    </div>
                </Zoom>
                <Zoom delay={500}>
                    <div className="motion">
                        Play YOUR game
                    </div>
                </Zoom>
            </div>
            <Fade delay={1250}>
                <Login />
            </Fade>
        </div>
    )
}

export default Header;
