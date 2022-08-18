import React from 'react'
import style from './Footer.module.css'
import footerContainer from "../Common/Styles/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${footerContainer.container}`}>
                <h2 className={style.title}>Nastassia Kauharenia</h2>
                <div className={style.footerIcons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>

                </div>
               <span>© All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
