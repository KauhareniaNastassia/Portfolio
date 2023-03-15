import style from './Main.module.scss'
import cvImg from "../../Assets/Image/resume.svg";
import NastassiaKauharenia from '../../Assets/Image/KauhareniaNastassia.pdf'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import {particlesOptions} from "../../Common/Styles/ParticlesOptions";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';


function Main() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <div id='main' className={style.mainBlock}>
            <Particles className={style.particles} id="tsparticles" init={particlesInit}
                       loaded={particlesLoaded} params={particlesOptions}/>

            <Fade left>
                <div className={style.text}>
                    <span>Hi, there</span>
                    <h1>I am Nastassia Kauharenia</h1>
                    <ReactTypingEffect
                        className={style.printedText}
                        text='Frontend Developer'
                    />
                </div>
            </Fade>
            <Fade right>
                <div className={style.downloadBlock}>
                    <a href={NastassiaKauharenia} download='NastassiaKauharenia.pdf' className={style.message}>
                        <img src={cvImg} alt="CV icon"/>
                        Download my CV
                    </a>
                </div>
            </Fade>



        </div>
    );
}


export default Main;
