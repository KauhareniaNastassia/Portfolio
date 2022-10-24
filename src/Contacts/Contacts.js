import React from 'react'
import style from './Contacts.module.css'
import contactsContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/Components/Title/Title";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${contactsContainer.container}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input type='text' className={style.input} value='input'/>
                    <input type='text' className={style.input} value='input'/>
                    <textarea className={style.textarea} value='textarea'/>
                </form>
                <button type='submit' className={style.btn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
