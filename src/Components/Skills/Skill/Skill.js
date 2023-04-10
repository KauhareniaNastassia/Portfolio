import React from 'react'
import style from './Skill.module.scss'
import Tilt from "react-tilt/dist/tilt";

function Skill(props) {
    return (
        <Tilt style={{height: 150, width: 150}}>
            <div className={style.skill}>
                <div className={style.icon}
                     style={props.style}>
                </div>
                <div>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </Tilt>
    )
}

export default Skill;