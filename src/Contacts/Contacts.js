
import style from './Contacts.module.scss'
import contactsContainer from "../Common/Styles/Container.module.scss";
import Title from "../Common/Components/Title/Title";
import Button from "../Common/Components/Button/Button";


function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>

            <Title text={'get in touch'}/>

            <div className={`${style.contactsContainer} ${contactsContainer.container}`}>
                <form className={style.form}>
                    <input type='text' className={style.input} value='Name'/>
                    <input type='text' className={style.input} value='E-mail'/>
                    <textarea className={style.textarea} value='Message'/>
                </form>
                <Button text={'Send message'}/>
            </div>
        </div>
    );
}

export default Contacts;
