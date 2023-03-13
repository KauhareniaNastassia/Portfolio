import style from './Projects.module.scss'
import projectsContainer from '../../Common/Styles/Container.module.scss'
import Project from "./Project/Project";
import Title from "../../Common/Components/Title/Title";
import todoImage from '../../Assets/Image/todolist.jpg'
import socialImage from '../../Assets/Image/logoSocial.jpg'

function Projects() {

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const cards = {
        backgroundImage: `url(${todoImage})`,
    }


    return (
        <div id='projects' className={style.projectsBlock}>
            <Title text={'Projects'}/>

            <div className={`${style.projectsContainer} ${projectsContainer.container}`}>

                <div className={style.projects}>

                    <Project
                        style={socialNetwork}
                        title={"Social Network"}
                        inProcess={'(in process)'}
                        projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, React-Router-dom, Axois, Formik, Rest API"}
                    />

                    <Project
                        style={todolist}
                        title={"Todolist"}
                        projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, Storybook, Postman, Axios, Javascript, Rest API"}/>

                    <Project
                        style={cards}
                        title={"Learning Cards"}
                        projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, Storybook, Postman, Axios, Javascript, Rest API"}

                    />

                </div>
            </div>
        </div>
    );
}

export default Projects;