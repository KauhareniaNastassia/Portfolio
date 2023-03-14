import React, {useEffect, useRef, useState} from 'react';
import style from './BurgerMenu.module.scss'


export const BurgerMenu = () => {
    const ref = useRef();
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

    useEffect(() => {

        const checkIfClickedOutside = (e) => {
            if (!popUpClose && !ref.current.contains(e.target) && !e.target.closest('.burgerButton')) {
                closeSideBar();
                e.preventDefault();
            }
            if (e.target.tagName === 'P') {
                closeSideBar();
            }
        };
        document.addEventListener('click', checkIfClickedOutside);
        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        }

    }, [popUpClose]);


    return (
        <div className={style.burger_wrapper} ref={ref}>

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
                       onClick={closeSideBar}>
                        Main
                    </a>
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

