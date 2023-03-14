import React from 'react';
import style from './Footer.module.scss'
import githubIcon from '../../Assets/Image/github.svg'
import linkedInIcon from '../../Assets/Image/linkedin.svg'
import codewarsIcon from '../../Assets/Image/codewars.svg'

export const Footer = () => {
    return (
        <nav className={style.nav}>
            <h4 className={style.title}>Follow me on</h4>
            <div className={style.line}></div>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <a href='https://github.com/KauhareniaNastassia'
                       target="_blank"
                       className={style.navLink}>
                        <img src={githubIcon} alt='social icon' className={style.icon1}/>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href='https://www.linkedin.com/in/nastassia-kavgorenya'
                       target='_blank'
                       className={style.navLink}>
                        <img src={linkedInIcon} alt='social icon' className={style.icon2}/>
                    </a>
                </li>
                <li className={style.navItem}>
                    <a href='https://www.codewars.com/users/KauhareniaNastassia'
                       target="_blank"
                       className={style.navLink}>
                        <img src={codewarsIcon} alt='social icon' className={style.icon3}/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

