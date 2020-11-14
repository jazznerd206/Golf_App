import React from 'react'
import './styles.css';

function HeaderBelow() {
    return (
        <div className="header-below-wrapper">
            <div className="first-level-flex">
                <div className='card'>
                    <div className='card-image'>
                        {/* <img src="" alt=""></img> */}
                        <span className="material-icons">
                            golf_course
                        </span>
                    </div>
                    <div className="card-text">
                        <h3><strong>Track your scores</strong></h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        {/* <img src="" alt=""></img> */}
                        <span className="material-icons">
                            insert_chart_outlined
                        </span>
                    </div>
                    <div className="card-text">
                        <h3><strong>See your data</strong></h3>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        {/* <img src="" alt=""></img> */}
                        <span className="material-icons">
                            psychology
                        </span>
                    </div>
                    <div className="card-text">
                        <h3><strong>Learn 'when' to think</strong></h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderBelow;