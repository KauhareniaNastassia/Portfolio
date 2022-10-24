import React from 'react'
import style from './Projects.module.css'
import projectsContainer from './../Common/Styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";

function Projects() {
    return (
        <div className={style.projectsBlock}>

            <div className={`${style.projectsContainer} ${projectsContainer.container}`}>

                <Title text={'Projects'}/>

                <div className={style.projects}>
                    <Project title={"Project1"} projectDescription={"Bla-bla-bla-bla"}/>
                    <Project title={"Project2"} projectDescription={"Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla"}/>
                </div>

            </div>
        </div>
    );
}

export default Projects;