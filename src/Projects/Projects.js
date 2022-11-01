import style from './Projects.module.scss'
import projectsContainer from '../Common/Styles/Container.module.scss'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";
import todoImage from '../../src/Assets/Image/todolist.jpg'
import socialImage from '../Assets/Image/logoSocial.jpg'

function Projects() {

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }


    return (
        <div className={style.projectsBlock}>
            <Title text={'Projects'}/>

            <div className={`${style.projectsContainer} ${projectsContainer.container}`}>



                <div className={style.projects}>

                    <Project
                        style={socialNetwork}
                        title={"Social Network"}
                        projectDescription={"Bla-bla-bla-bla"}/>

                    <Project
                        style={todolist}
                        title={"Todolist"}
                        projectDescription={"Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla"}/>

                </div>

            </div>
        </div>
    );
}

export default Projects;