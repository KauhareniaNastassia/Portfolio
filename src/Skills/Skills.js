import React from 'react'
import style from './Skills.module.css'
import skillsContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${skillsContainer.container}`}>

                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Bla-bla-bla-bla"}/>
                    <Skill title={"CSS"} description={"Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla"}/>
                    <Skill title={"React"} description={"Bla"}/>

                </div>

            </div>
        </div>
    );
}

export default Skills;