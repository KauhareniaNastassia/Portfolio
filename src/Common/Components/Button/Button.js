import style from './Button.module.scss'

function Button(props) {
    return (
        <div className={`${style.btn} ${props.style}`}>
            <h2>{props.text}</h2>
        </div>
    );
}

export default Button;