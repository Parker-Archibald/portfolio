import React, {Component} from 'react';
import '../Styles/AboutMe.css';

class AboutMe extends Component {
    render() {
        return(
            <div id='aboutMeAll'>
                <h1 id='aboutMeTitle'>About Me</h1>
                <div id='aboutMeBackImg'/>
                    <div id='aboutMeText'>
                        <div id='aboutMeH1'>Nice to meet you, I'm Parker Archibald</div>
                        <div id='aboutMeParagraph'>Parker grew up in Pleasant Grove, Utah. He has always been kind and caring for others. Currently studying Web Development while 
                        enjoying the love of his life, Nicole, and his newborn son, Boston. He is a Certified Full Stack Web Developer well versed in structuring, developing and 
                        implementing interactive websites with experience in Object Oriented and Procedural programming, HTML5, CSS3, JavaScript, and React.
                        </div> 
                    </div>
                    <div id='aboutMeParagraphBorder'/>
                    <img src={require('../Styles/Pictures/AboutMePic.jpg')} id='aboutMePic'/>
            </div>
        )
    }
}

export default AboutMe;