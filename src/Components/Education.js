import React from 'react';
import '../Styles/Education.css';

const Education = () => {
    return(
        <div id='educationAll'>
            <div id='educationTitle'>Education</div>
            <div id='allEducation'>
                <div id='educationBox'>
                    <div id='eduBoxTitle'>Helio Training</div>
                    <div id='eduBoxDesc'>Out of 9 students, I was one of 2 that received a certificate for Full Stack Web Development</div>
                    <div id='helioDate'>Summer of 2019</div>
                </div>
                <div id='educationBox'>
                    <div id='eduBoxTitle'>Full Sail University</div>
                    <div id='eduBoxDesc'>Currently studying Web Development at Full Sail University</div>
                    <div id='fullSailDate'>Fall 2022 - Current</div>
                </div>
            </div>
        </div>
    )
}

export default Education;