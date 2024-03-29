import style from './About.module.scss'
import Title from "../../Common/Components/Title/Title";
import linkedin from '../../Assets/Image/linkedin.svg'
import github from '../../Assets/Image/github.svg'
import codewars from '../../Assets/Image/codewars.svg'
import Fade from 'react-reveal/Fade';


function About() {

    return (
        <div id='about' className={style.aboutBlock}>

            <Title text={'About'}/>

            <div className={style.wrapper}>
                <Fade bottom>
                    <div className={style.aboutContainer}>
                        <div className={style.leftBlock}>
                            <p>I am a front-end developer with huge interest in programming. I have
                                an experience in creating SPA with
                                React/Redux/ TypeScript in team.</p>
                            <p>
                                Now I am improving my skills in this direction and expanding them with new technologies,
                                for example, I’m planning to learn Angular. I also have an experience in design, I was
                                studing UX/UI design.
                            </p>
                            <p> I spend my leisure time reading literature and articles about development, watching
                                video tutorials on YouTube about React and JS.
                                Open for your suggestions.</p>
                        </div>
                        <div className={style.rightBlock}>
                            <ul>
                                <li>
                                    <span className={style.infoTitle}>Name:</span>
                                    <span className={style.infoDescr}>Nastassia Kauharenia</span>
                                </li>
                                <li>
                                    <span className={style.infoTitle}>Phone:</span>
                                    <span className={style.infoDescr}>+375-29-67-37-963</span>
                                </li>
                                <li>
                                    <span className={style.infoTitle}>Email:</span>
                                    <span className={style.infoDescr}>kavgorenya@gmail.com</span>
                                </li>
                                <li>
                                    <span className={style.infoTitle}>Remote:</span>
                                    <span className={style.infoDescr}>available</span>
                                </li>
                                <li>
                                    <span className={style.infoTitle}>English:</span>
                                    <span className={style.infoDescr}>B1</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className={style.linksContainer}>

                        <a href='https://www.linkedin.com/in/nastassia-kavgorenya'
                           target='_blank'
                           className={style.linkItem}>
                            <img src={linkedin} alt='social icon'/>
                            <span>My LinkedIn</span>
                        </a>

                        <a href='https://github.com/KauhareniaNastassia'
                           target="_blank"
                           className={style.linkItem}>
                            <img src={github} alt='social icon'/>
                            <span>My GitHub</span>
                        </a>

                        <a href='https://www.codewars.com/users/KauhareniaNastassia'
                           target="_blank"
                           className={style.linkItem}>
                            <img src={codewars} alt='social icon'/>
                            <span>My Codewars</span>
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default About;