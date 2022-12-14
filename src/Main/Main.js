import style from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'


function Main() {
    return (
        <div id='main' className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi, there</span>
                    <h1>I am Nastassia Kauharenia</h1>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </div>
    );
}


export default Main;
