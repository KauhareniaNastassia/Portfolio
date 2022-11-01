import style from './Button.module.scss'

function Button(props) {
    return (
        <div className={style.btn}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Button;