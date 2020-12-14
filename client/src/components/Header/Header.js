import React from 'react';
import Login from '../Login/Login';
import { Zoom, Fade } from 'react-reveal';
import './styles.css';

function Header() {
    return (
        <div className="header-wrapper">
            {/* <Navbar /> */}
            <Fade>
                <Login />
            </Fade>
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
            
        </div>
    )
}

export default Header;
