import style from './Header.module.scss'
import linkedInImg from '../Assets/Image/linkedin.svg'
import githubImg from '../Assets/Image/github.svg'


function Header() {

    const linkedIn = {
        backgroundImage: `url(${linkedInImg})`,
    }
    const github = {
        backgroundImage: `url(${githubImg})`,
    }


    return (
        <div className={style.header}>
            <div className={style.socialNetworks}>

                <a href='https://www.linkedin.com/in/nastassia-kavgorenya/' target='_blank'>
                    <div className={style.socialIcon} style={linkedIn}></div>
                </a>

                <a href='https://github.com/KauhareniaNastassia' target="_blank">
                    <div className={style.socialIcon} style={github}></div>
                </a>
            </div>



            <div className={style.nav}>
                <a href="#main"
                   className={style.item}>Main</a>
                <a href="#about"
                   className={style.item}>About</a>
                <a href="#skills"
                   className={style.item}>Skills</a>
                <a href="#projects"
                   className={style.item}>Projects</a>
                <a href="#contacts"
                   className={style.item}>Contacts</a>
            </div>
        </div>
    );
}

export default Header;
