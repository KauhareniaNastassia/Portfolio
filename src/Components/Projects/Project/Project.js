import style from './Project.module.scss'
import Button from "../../../Common/Components/Button/Button";

function Project(props) {
    return (
        <div className={style.wrapper}>

            <div className={style.project}>

                <div
                    className={style.image}
                    style={props.style}>
                </div>

                <div className={style.projectInfo}>
                    <h4 className={style.projectTitle}>{props.title}</h4>
                    <span className={style.description}>{props.projectDescription}</span>
                </div>

                <div className={style.cardBack}>
                    <a href={props.link}
                       target='_blank'>
                        <Button text={'See demo version'}/>
                    </a>

                    <a href={props.codeLink}
                       target='_blank'
                       className={style.codeLink}>
                        Source code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;


/*
function Project(props) {
    return (
        <div className={style.project}>
            <div
                className={style.image}
                style={props.style}>
                <a href={props.link}
                   target='_blank'>
                    <Button text={'See'}/>
                </a>
            </div>

            <div className={style.projectInfo}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                <span className={style.description}>{props.projectDescription}</span>
                <a href={props.codeLink}
                   target='_blank'
                   className={style.codeLink}>
                    Source code
                </a>
            </div>
        </div>
    );
}

export default Project;*/
