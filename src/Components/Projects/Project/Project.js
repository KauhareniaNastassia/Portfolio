import style from './Project.module.scss'
import Button from "../../../Common/Components/Button/Button";
import Tilt from 'react-tilt'

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

export default Project;