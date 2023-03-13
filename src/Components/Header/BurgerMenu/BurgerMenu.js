import React, {useState} from 'react';
import style from './BurgerMenu.module.scss'

export const BurgerMenu = () => {

    const [showMenuBtn, setShowMenuBtn] = useState(false)
    const [popUpClose, setPopUpClose] = useState(true)


    const onClickOpenMenu = () => {
        setShowMenuBtn(!showMenuBtn)
        setPopUpClose(!popUpClose)
    }

    const closeSideBar = () => {
        setShowMenuBtn(false)
        setPopUpClose(true)
    }


    /*   let menuButton = document.querySelector(".menuButton");
       let menu = document.querySelector(".menu");

       document.addEventListener('click', closeSideBar)

       let burgerButton = document.getElementById("hamburger");
       burgerButton.addEventListener('click', onClickOpenMenu)*/

    return (
        <div className={style.burger_wrapper}>

            <button
                type='button'
                id="burgerButton"
                className={showMenuBtn ? `${style.menu__btn} ${style.menu_open}` : `${style.menu__btn} ${style.menu_close}`}
                onClick={onClickOpenMenu}
            >
                <span className={style.menu__btn_span}/>
                <span className={style.menu__btn_span}/>
                <span className={style.menu__btn_span}/>
            </button>

            {!popUpClose &&

                <div className={style.burger_popUp}>
                    <a href="#main"
                       className={style.burger_popUp_item}
                       onClick={closeSideBar}>Main</a>
                    <a href="#about"
                       className={style.burger_popUp_item}
                       onClick={closeSideBar}>About</a>
                    <a href="#skills"
                       className={style.burger_popUp_item}
                       onClick={closeSideBar}>Skills</a>
                    <a href="#projects"
                       className={style.burger_popUp_item}
                       onClick={closeSideBar}>Projects</a>
                    <a href="#contacts"
                       className={style.burger_popUp_item}
                       onClick={closeSideBar}>Contacts</a>
                </div>
            }
        </div>
    );
};

