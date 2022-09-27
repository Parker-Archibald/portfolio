import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {

    const handleHover = () => {
        document.getElementById('todoPictureContainer').className = 'todoPictureContainerAfter';
        document.getElementById('todoPicture').className = 'todoPictureAfter';
        document.getElementById('projectBox').className = 'projectBoxAfter';
    }

    const handleMouseLeave = () => {
        document.getElementById('todoPictureContainer').className = 'todoPictureContainer';
        document.getElementById('todoPicture').className = 'todoPictureClose';
        document.getElementById('projectBox').className = 'projectBoxClosed';
    }

    const handleOpenTodoApp = () => {
        window.open("http://parker-archibald-todo.herokuapp.com/", "_blank")
    }

    return(
        <div id='projectsAll'>
            <div id='projectsTitle'>Projects</div>
            <div id='projectsEach'>
                <div id='projectBox' className='projectBox' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <div id='projectInnerText'>
                        <div id='projectBoxTitle'>Todo App</div>
                        <div id='todoAppDescription'>
                            <div id='todoProjectDescTitle'>Project:</div>
                            <div id='todoProjectDesc'>This project is a mobile app that allows you to keep track of your to do's. It demonstrates
                                the MERN stack. The user can create an account, 
                                login, create tasks and add to do items to that 
                                task.
                            </div>
                            <div id='todoProjectSkillsTitle'>Skills Used:</div>
                            <div id='todoProjectSkills'>In this project,
                                I utilized React as the Javascript framewor and Express.js to create a REST API.
                                I also used Nodemon to automatically restart the API, React-router-dom to handle the displaying of different pages.
                                The icons were pulled from React-icons, I also created a database in Mongodb and used Postman to manually query the database.
                                As a final touch, I deployed the react app on heroku.
                            </div>
                        </div>
                    </div>
                </div>
                <div id='todoPictureContainer' className='todoPictureContainer' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} onClick={handleOpenTodoApp}><img src={require('../Styles/Pictures/TODO APP Screenshot.png')} id='todoPicture' className='todoPicture'/></div>
            </div>
        </div>
    )
}

export default Projects;