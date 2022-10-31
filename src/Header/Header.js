import React from 'react'
import style from './Header.module.scss'




function Header() {
    return (
        <div className={style.header}>
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
