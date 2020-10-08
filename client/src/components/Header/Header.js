import React from 'react';
import './styles.css';

function Header() {
    return (
        <div className="header-wrapper flex-column">
            <div className="row-one">
                <h1>This is where the title will go</h1>
            </div>
            <div className="row-two flex-row">
                <div className="sub-title">
                    <h2>This is where i will describe what the system is</h2>
                </div>
                <div className="sub-title">
                    <h2>This will be a picture example of a scorecard</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
