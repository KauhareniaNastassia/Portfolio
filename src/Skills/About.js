import style from './About.module.scss'
import Title from "../Common/Components/Title/Title";

function About() {
    return (
        <div id='about' className={style.aboutBlock}>
            <Title text={'About'}/>

            <div className={`${style.aboutContainer} `}>
                    <div className={style.leftBlock}>
                        <p>I am a front-end developer with huge interest in programming. I have
                            an experience in creating SPA with React/Redux/ TypeScript in team. Now I am improving my skills in this direction and expanding them with new technologies. And also I have interest to learn React Native and Angular. I have an experience in design, I was studying UX/UI design.</p>
                        <p>I spend my leisure time reading literature and articles about development, watching video tutorials on YouTube about React and JS.</p>
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
                                <span className={style.infoTitle}>Remote work:</span>
                                <span className={style.infoDescr}>available</span>
                            </li>
                            <li>
                                <span className={style.infoTitle}>English:</span>
                                <span className={style.infoDescr}>B1</span>
                            </li>
                            <li>
                                <span className={style.infoTitle}>LinkedIn:</span>
                                <a href='https://www.linkedin.com/in/nastassia-kavgorenya/' target="_blank" >NastassiaKauharenia</a>
                            </li>
                            <li>
                                <span className={style.infoTitle}>GitHub:</span>
                                <a href='https://github.com/KauhareniaNastassia'  target="_blank" >NastassiaKauharenia</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default About;