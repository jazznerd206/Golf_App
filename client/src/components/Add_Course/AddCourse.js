// REACT DEPENDENCIES
import React, { useState } from 'react';
import './styles.css';
import API from '../../utils/API';


function AddCourse() {

    const [ courseName, setCourseName] = useState('');
    const [ lengthYards, setLengthYards ] = useState(0);
    const [ lengthHoles, setLengthHoles ] = useState(0);
    const [ par, setPar ] = useState(0);
    const [ rating, setRating ] = useState(0.0);

    
    const submitCourse = event => {
        event.preventDefault();
        console.log(`${courseName} (${lengthHoles} holes) staged for DB entry @ ${lengthYards} yards, par ${par}, rating ${rating}`);
        API.designCourse({
            courseName,
            lengthYards,
            lengthHoles,
            par,
            rating
        })
    }


    return (
        <div className="addCourse-wrapper">
            <div className="form-wrapper">
                <form>
                    <div className="form-group row">
                        <label htmlFor="courseName" className="">Course Name</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control fadeUp"
                                id="name"
                                name={courseName}
                                value={courseName}
                                // ref={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lengthYards" className="">Total Yardage</label>
                        <div className="">
                            <input
                                type="number"
                                className="form-control fadeUp"
                                id="name"
                                name={lengthYards}
                                value={lengthYards}
                                // ref={lengthYards}
                                onChange={(e) => setLengthYards(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lengthHoles" className="">9 or 18?</label>
                        <div className="">
                            <input
                                type="number"
                                className="form-control fadeUp"
                                id="name"
                                name={lengthHoles}
                                value={lengthHoles}
                                // ref={lengthHoles}
                                onChange={(e) => setLengthHoles(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="par" className="">Course par</label>
                        <div className="">
                            <input
                                type="number"
                                className="form-control fadeUp"
                                id="name"
                                name={par}
                                value={par}
                                // ref={par}
                                onChange={(e) => setPar(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rating" className="">Course Rating</label>
                        <div className="">
                            <input
                                type="number"
                                className="form-control fadeUp"
                                id="name"
                                name={rating}
                                value={rating}
                                // ref={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            onClick={submitCourse} 
                            className="">
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCourse;