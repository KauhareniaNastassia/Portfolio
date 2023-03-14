import style from './Contacts.module.scss'
import Title from "../../Common/Components/Title/Title";
import Button from "../../Common/Components/Button/Button";
import {Footer} from "../Footer/Footer";


function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>

            <div className={style.wrapper}>
                <Title text={'get in touch'}/>

                <div className={style.contactsContainer}>
                    <form className={style.form}>
                        <div  className={style.inputWrapper}>
                            <input
                                type='text'
                                className={style.input}
                                placeholder=' '
                                id='Name'
                                onChange={() => {}}/>
                            <label htmlFor='Name'>Name</label>
                        </div>
                        <div className={style.inputWrapper}>
                            <input
                                type='email'
                                className={style.input}
                                placeholder=' '
                                id='Email'
                                onChange={() => {}}/>
                            <label htmlFor='Email'>E-mail</label>
                        </div>
                        <div className={style.inputWrapper}>
                        <textarea
                            className={style.textarea}
                            placeholder=' '
                            id='Message'
                            onChange={() => {}}/>
                            <label htmlFor='Message'>Message</label>
                        </div>

                    </form>
                    <Button text={'Send message'}/>
                </div>
            </div>



            <Footer/>
        </div>
    );
}

export default Contacts;
