import style from './Main.module.scss'
import cvImg from "../../Assets/Image/resume.svg";
import NastassiaKauharenia from '../../Assets/Image/KauhareniaNastassia.pdf'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import {particlesOptions} from "../../Common/Styles/ParticlesOptions";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import myPhoto from '../../Assets/Image/myPhoto.jpg'


function Main() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (<div id='main' className={style.mainBlock}>
            <Particles className={style.particles} id="tsparticles" init={particlesInit}
                       loaded={particlesLoaded} params={particlesOptions}/>

            <div className={style.photo}>
                <img className={style.img} src={myPhoto} alt='my photo'/>
            </div>

            <Fade left>
                <div className={style.text}>
                    <span>Hi, there</span>
                    <h1>I am Nastassia Kauharenia</h1>
                    <ReactTypingEffect
                        className={style.printedText}
                        text='Frontend Developer'
                    />
                    <div className={style.downloadLink}>
                        <a href={NastassiaKauharenia} download='NastassiaKauharenia.pdf'>
                            Download my CV
                        </a>
                    </div>


                </div>
            </Fade>
            <Fade right>
                <div className={style.downloadBlock}>
                    <a href={NastassiaKauharenia} download='NastassiaKauharenia.pdf' className={style.message}>
                        <img src={cvImg} alt="CV icon"/>
                        <span>Download my CV</span>
                    </a>
                </div>
            </Fade>


        </div>);
}


export default Main;
