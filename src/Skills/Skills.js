import React from 'react'
import style from './Skills.module.css'
import skillsContainer from './../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${skillsContainer.container}`}>

                <h2 className={style.title}>Skills</h2>
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