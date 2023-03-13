import style from './Main.module.scss'
import styleContainer from '../../Common/Styles/Container.module.scss'
import linkedInImg from "../../Assets/Image/linkedin.svg";
import githubImg from "../../Assets/Image/github.svg";
import cvImg from "../../Assets/Image/resume.svg";
import NastassiaKauharenia from '../../Assets/Image/KauhareniaNastassia.pdf'



function Main() {
    return (
        <div id='main' className={style.mainBlock}>

                <div className={style.text}>
                    <span>Hi, there</span>
                    <h1>I am Nastassia Kauharenia</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.downloadBlock}>
                    <a href ={NastassiaKauharenia} download='NastassiaKauharenia.pdf' className={style.message}>
                        <img src={cvImg} alt="CV icon" />
                        Download my CV
                    </a>
                </div>

        </div>
    );
}


export default Main;
