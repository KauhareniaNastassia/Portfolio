import React from 'react'
import style from './Skill.module.scss'
import Tilt from 'react-tilt'

function Skill(props) {
    return (/*<Tilt className="Tilt">*/
        <div className={style.wrapper}>

            <div className={style.skill}>
                <div className={style.icon}
                     style={props.style}>
                </div>

                <div className={style.cardBack}>
                    <h3>{props.title}</h3> {/*card back*/}
                </div>

            </div>

        </div>

        /*</Tilt>*/);
}

export default Skill;