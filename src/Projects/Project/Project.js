import React from 'react'
import style from './Project.module.css'


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a className={style.seeBtn}>See</a>
            </div>
            <h4 className={style.projectTitle}>{ props.title }</h4>
            <span className={style.description}>{ props.projectDescription}</span>
        </div>
    );
}

export default Project;