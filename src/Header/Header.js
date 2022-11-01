import React from 'react'
import style from './Header.module.scss'
import linkedInImg from '../Assets/Image/linkedin.png'
import githubImg from '../Assets/Image/github.png'




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
                <div className={style.socialIcon} style={linkedIn}>
                    <a href=''></a>
                </div>

                <div className={style.socialIcon} style={github}>
                    <a href=''></a>
                </div>

            </div>


            <div className={style.nav}>
                <a href=""
                   className={style.item}>Main</a>
                <a href=""
                   className={style.item}>About</a>
                <a href=""
                   className={style.item}>Projects</a>
                <a href=""
                   className={style.item}>Contacts</a>
            </div>
        </div>
    );
}

export default Header;
