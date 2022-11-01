import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../Common/Components/Title/Title";
import htmlImg from '../../Assets/Image/html.png'
import cssImg from '../../Assets/Image/css.png'
import jsImg from '../../Assets/Image/javascript.png'
import typescriptImg from '../../Assets/Image/typescript.png'
import reactImg from '../../Assets/Image/react.png'
import reduxImg from '../../Assets/Image/redux.png'


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
    const redux = {
        backgroundImage: `url(${reduxImg})`,
    }




    return (
        <div className={style.skillsBlock}>
            <Title text={'Skills'}/>
            <div className={style.skillsContainer}>
                <div className={style.skills}>
                    <Skill title={"HTML"}
                           description={"Bla-bla-bla-bla"}
                           style={html}/>

                    <Skill title={"CSS"}
                           description={"Bla-bla-bla-bla"}
                           style={css}/>

                    <Skill title={"JS"}
                           description={"Bla-bla-bla-bla"}
                           style={js}/>

                    <Skill title={"TYPESCRIPT"}
                           description={"Bla-bla-bla-bla"}
                           style={typescript}/>

                    <Skill title={"REACT"}
                           description={"Bla-bla"}
                           style={react}/>

                    <Skill title={"REDUX"}
                           description={"Bla"}
                           style={redux}/>
                </div>
            </div>
        </div>
    );
}

export default About;