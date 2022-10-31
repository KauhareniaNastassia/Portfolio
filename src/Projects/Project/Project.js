import React from 'react'
import style from './Project.module.scss'
import Button from "../../Common/Components/Button/Button";


function Project(props) {
    return (
        <div className={style.project}>
            <div
                className={style.image}
                style={props.style}>

                <Button text={'See'}/>

            </div>
            <h4 className={style.projectTitle}>{props.title}</h4>
            <span className={style.description}>{props.projectDescription}</span>
        </div>
    );
}

export default Project;