import React from 'react';
import './styles.css';

function Header() {
    return (
        <div className="header-wrapper flex-column">
            <div className="row-one">
                <h1>I wasn't committed to the shot, BUT I HIT IT ANYWAY</h1>
            </div>
            <div className="row-two flex-row">
                <div className="sub-title">
                    <h2>Every golfer has uttered this exact sentiment. On the course, as in life, the best results always stem from being situationally prepared for whatever comes your way. For a real life example, imagine you are driving a Corvette. You thought it was a bad idea to drive to the store in the snow, but you did it anyway. You ended up wrapping that sweet little red sports car around a telephone pole. The whole situation could have been avoided.</h2>
                </div>
                <div className="sub-title">
                    <h2>The fear of mistakes can cause uncertainty and doubt in the mind at any time, and often at the worst possible time. Have you ever gotten to the top of your backswing and thought... "My feet are in the wrong position"?</h2>
                    <h2>The best way to avoid uncertainty and doubt is to properly prepare. These are my tools for playing more consistent, more rewarding, happier golf. By considering the important pieces and disregarding the unimportant, I have found that I consistently hit better shots, make better swings, and feel much less frustration and disappointment on the course.</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
