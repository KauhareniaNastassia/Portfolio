import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../Common/Components/Title/Title";
import htmlImg from '../../Assets/Image/html.svg'
import cssImg from '../../Assets/Image/css.svg'
import jsImg from '../../Assets/Image/javascript.svg'
import typescriptImg from '../../Assets/Image/typescript.svg'
import reactImg from '../../Assets/Image/react.svg'
import reduxImg from '../../Assets/Image/redux.svg'
import gitImg from '../../Assets/Image/git.svg'
import storybookImg from '../../Assets/Image/storybook.svg'
import postmanImg from '../../Assets/Image/postman.svg'
import unitTestImg from '../../Assets/Image/unitTest.svg'
import softSkillsImg from '../../Assets/Image/softSkills.svg'
import materialUIImg from '../../Assets/Image/materialUI.svg'



function About() {

    const html = {
        backgroundImage: `url(${htmlImg})`,
    }
    const css = {
        backgroundImage: `url(${cssImg})`,
    }
    const js = {
        backgroundImage: `url(${jsImg})`,
    }
    const typescript = {
        backgroundImage: `url(${typescriptImg})`,
    }
    const react = {
        backgroundImage: `url(${reactImg})`,
    }
    const git = {
        backgroundImage: `url(${gitImg})`,
    }
    const storybook = {
        backgroundImage: `url(${storybookImg})`,
    }
    const postman = {
        backgroundImage: `url(${postmanImg})`,
    }
    const unitTest = {
        backgroundImage: `url(${unitTestImg})`,
    }
    const softSkills = {
        backgroundImage: `url(${softSkillsImg})`,
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`,
    }
    const materialUI = {
        backgroundImage: `url(${materialUIImg})`,
    }


    return (
        <div id='skills' className={style.skillsBlock}>
            <Title text={'Skills'}/>
            <div className={style.skillsContainer}>
                <div className={style.skills}>
                    <Skill title={"HTML"}
                           style={html}/>

                    <Skill title={"CSS"}
                           style={css}/>

                    <Skill title={"JS"}
                           style={js}/>

                    <Skill title={"TYPESCRIPT"}
                           style={typescript}/>

                    <Skill title={"REACT"}
                           style={react}/>

                    <Skill title={"REDUX"}
                           style={redux}/>

                    <Skill title={"GIT"}
                           style={git}/>

                    <Skill title={"STORYBOOK"}
                           style={storybook}/>

                    <Skill title={"POSTMAN"}
                           style={postman}/>

                    <Skill title={"MATERIAL UI"}
                           style={materialUI}/>

                    <Skill title={"UNIT TEST"}
                           style={unitTest}/>

                    <Skill title={"SOFT SKILLS"}
                           style={softSkills}/>
                </div>
            </div>
        </div>
    );
}

export default About;