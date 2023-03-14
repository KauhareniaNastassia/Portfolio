import style from './Header.module.scss'
import linkedInImg from '../../Assets/Image/linkedin.svg'
import githubImg from '../../Assets/Image/github.svg'
import React from "react";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";
import * as Scroll from 'react-scroll';
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import {NavMenuItem} from "./NavMenuItem/NavMenuItem";


function Header() {

    const linkedIn = {
        backgroundImage: `url(${linkedInImg})`,
    }
    const github = {
        backgroundImage: `url(${githubImg})`,
    }

    return (<div className={style.fixed}>

        <div className={style.header}>

            <div className={style.socialNetworks}>
                <a href='src/Components/Header/Header' target='_blank'>
                    <div className={style.socialIcon} style={linkedIn}></div>
                </a>

                <a href='https://github.com/KauhareniaNastassia' target="_blank">
                    <div className={style.socialIcon} style={github}></div>
                </a>
            </div>


            <div className={style.nav}>

                <NavMenuItem
                    path="main"
                    title='Main'
                />
                <NavMenuItem
                    path="about"
                    title='About'
                />
                <NavMenuItem
                    path="skills"
                    title='Skills'
                />
                <NavMenuItem
                    path="projects"
                    title='Projects'
                />
                <NavMenuItem
                    path="contacts"
                    title='Contacts'
                />
            </div>

            <div className={style.burger}>
                <BurgerMenu/>
            </div>

        </div>


    </div>);
}

export default Header;
