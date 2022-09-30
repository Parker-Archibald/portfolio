import React, {Component} from 'react';
import {CgProfile} from 'react-icons/cg'
import {GoGraph} from 'react-icons/go';
import {FcGraduationCap} from 'react-icons/fc';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BiMailSend} from 'react-icons/bi';
import {GrDocumentText} from 'react-icons/gr';
import {GiHamburgerMenu} from 'react-icons/gi';
import '../Styles/Nav.css';

class Nav extends Component {

    render() {

        const handleHamburgerClick = (e) => {
            e.preventDefault();
            if(document.getElementById('navBarAll').className === 'navBarAll' || document.getElementById('navBarAll').className === 'navBarAllClosed') {
                document.getElementById('navBarAll').className = 'navBarAllAfter';
                document.getElementById('navExitX').className = 'navExitXAfter';
            }
            else {
                alert('error');
            }
        };

        const handleCloseNavMenu = () => {
            document.getElementById('navBarAll').className = 'navBarAllClosed';
            document.getElementById('navExitX').className = 'navExitXClosed';
        }

        const handleScrollToDiv = (e) => {
            e.preventDefault();
            if(e.target.id === 'aboutNav') {
                let toScroll = document.getElementById('aboutMeContainer');
            
                toScroll.scrollIntoView();
            }
            else if(e.target.id === 'skillsNav') {
                let toScroll = document.getElementById('skillsContainer');
            
                toScroll.scrollIntoView();
            }
            else if(e.target.id === 'educationNav') {
                let toScroll = document.getElementById('educationContainer');
            
                toScroll.scrollIntoView();
            }

            else if(e.target.id === 'projectsNav') {
                let toScroll = document.getElementById('projectsContainer');
            
                toScroll.scrollIntoView();
            }
            else {
                alert('none')
            }
        }

        return(
            <div>
                <div id='navHamMenuIcon' onClick={handleHamburgerClick}><GiHamburgerMenu/></div>
                <div id='navExitX' className='navExitX' onClick={handleCloseNavMenu}>X</div>
                <div id='navBarAll' className ='navBarAll'>
                    
                    <div id='navTitle'>
                        Parker Archibald
                        <div id='navTitle2'>
                            Full Stack Web Developer
                        </div>
                    </div>
                    <div id='linksNav'>
                        <button id='aboutNav' onClick={handleScrollToDiv}>
                            <CgProfile id='navAboutIcon'/>About
                        </button>
                        <button id='skillsNav' onClick={handleScrollToDiv}>
                            <GoGraph id='skillsNavIcon'/> Skills
                        </button>
                        <button id='educationNav' onClick={handleScrollToDiv}>
                            <FcGraduationCap id='educationNavIcon'/> Education
                        </button>
                        <button id='projectsNav' onClick={handleScrollToDiv}>
                            <AiOutlineFundProjectionScreen id='projectsNavIcon'/>Projects
                        </button>
                        <button id='contactNav'>
                            <BiMailSend id='contactNavIcon'/> Contact
                        </button>
                        <button id='resumeNav'>
                            <GrDocumentText id='resumeNavIcon'/> Resume
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;