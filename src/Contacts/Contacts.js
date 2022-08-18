import React from 'react'
import style from './Contacts.module.css'
import contactsContainer from "../Common/Styles/Container.module.css";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${contactsContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input className={style.input} value='input'/>
                    <input className={style.input} value='input'/>
                    <textarea className={style.textarea} value='textarea'/>
                </form>
                <button className={style.btn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
