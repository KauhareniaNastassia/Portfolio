import React, {useEffect, useRef, useState} from 'react';
import style from './BurgerMenu.module.scss'
import {NavMenuItem} from "../NavMenuItem/NavMenuItem";


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

                    <NavMenuItem
                        path="main"
                        title='Main'
                        onClick={closeSideBar}
                    />
                    <NavMenuItem
                        path="about"
                        title='About'
                        onClick={closeSideBar}
                    />
                    <NavMenuItem
                        path="skills"
                        title='Skills'
                        onClick={closeSideBar}
                    />
                    <NavMenuItem
                        path="projects"
                        title='Projects'
                        onClick={closeSideBar}
                    />
                    <NavMenuItem
                        path="contacts"
                        title='Contacts'
                        onClick={closeSideBar}
                    />
                </div>
            }
        </div>
    );
};

