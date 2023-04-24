import style from './Main.module.scss'
import cvImg from "../../Assets/Image/resume.svg";
import Nastassia_Kauharenia from '../../Assets/Image/Nastassia_Kauharenia.pdf'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {useCallback, useEffect, useRef} from "react";
import {particlesOptions} from "../../Common/Styles/ParticlesOptions";
import ReactTypingEffect from 'react-typing-effect';
import myPhoto from '../../Assets/Image/myPhoto.jpg'
import {gsap} from 'gsap'



function Main() {

    let leftElement = useRef();
    let rightElement = useRef();
    const tl = useRef()

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    useEffect(() => {
        tl.current = gsap.timeline()
        gsap.from(leftElement, {
            xPercent: -400,
            ease: 'back.out(1.5)',
            duration: 1.5,
        })
    }, [])

    useEffect(() => {
        tl.current = gsap.timeline()
        gsap.from(rightElement, {
            xPercent: 400,
            ease: 'back.out(1.5)',
            duration: 1.5,
        })
    }, [])


    return (<div id='main' className={style.mainBlock}>
        <Particles className={style.particles} id="tsparticles" init={particlesInit}
                   loaded={particlesLoaded} params={particlesOptions}/>

        <div className={style.photo}>
            <img className={style.img} src={myPhoto} alt='my photo'/>
        </div>

        <div className={style.textAndDownloadWrapper}>

    <div className={style.text} ref={element => {
        leftElement = element
    }}>
        <span>Hi, there</span>
        <h1>I am Nastassia Kauharenia</h1>
        <ReactTypingEffect
            className={style.printedText}
            text='Frontend Developer'
        />
    </div>



            <div className={style.downloadBlock} ref={element => {
                rightElement = element
            }}>
                <a href={Nastassia_Kauharenia} download='Nastassia_Kauharenia.pdf' className={style.message}>
                    <img src={cvImg} alt="CV icon"/>
                    <span>Download my CV</span>
                </a>
            </div>

        </div>
    </div>);
}


export default Main;
