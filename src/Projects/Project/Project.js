import React from 'react'
import style from './Project.module.css'


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.btn}>See</button>
            </div>
            <h4>{ props.title }</h4>
            <span className={style.description}>{ props.projectDescription}</span>
        </div>
    );
}

export default Project;