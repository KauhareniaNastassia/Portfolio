import style from './Projects.module.scss'
import projectsContainer from '../../Common/Styles/Container.module.scss'
import Project from "./Project/Project";
import Title from "../../Common/Components/Title/Title";
import todoImage from '../../Assets/Image/todolist.jpg'
import socialImage from '../../Assets/Image/logoSocial.jpg'
import cardsImage from '../../Assets/Image/cards.jpg'
import libraryImage from '../../Assets/Image/library.jpg'
import Fade from 'react-reveal/Fade';

function Projects() {

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    }
    const library = {
        backgroundImage: `url(${libraryImage})`,
    }

    return (
        <div id='projects' className={style.projectsBlock}>
            <Title text={'Projects'}/>
            <Fade bottom cascade>
                <div className={`${style.projectsContainer} ${projectsContainer.container}`}>

                    <div className={style.projects}>

                        <Project
                            style={library}
                            title={"Library"}
                            projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, React-Router-dom, Axois, Formik, Rest API"}
                            link={'https://KauhareniaNastassia.github.io/Library'}
                            codeLink={'https://github.com/KauhareniaNastassia/Library'}
                        />

                        <Project
                            style={socialNetwork}
                            title={"Social Network"}
                            projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, React-Router-dom, Axois, Formik, Rest API"}
                            link={'https://KauhareniaNastassia.github.io/Social_Network'}
                            codeLink={'https://github.com/KauhareniaNastassia/Social_Network'}
                        />

                        <Project
                            style={cards}
                            title={"Learning Cards"}
                            projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, Storybook, Postman, Axios, Javascript, Rest API"}
                            link={'https://KauhareniaNastassia.github.io/Cards'}
                            codeLink={'https://github.com/KauhareniaNastassia/Cards'}
                        />

                        <Project
                            style={todolist}
                            title={"Todolist"}
                            projectDescription={"Stack: React, Redux, Typescript, Redux-Thunk, Storybook, Postman, Axios, Javascript, Rest API"}
                            link={'https://KauhareniaNastassia.github.io/Todolist'}
                        />

                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;