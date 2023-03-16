import style from './Contacts.module.scss'
import Title from "../../Common/Components/Title/Title";
import {Footer} from "../Footer/Footer";
import {ContactsForm} from "./ContactsForm/ContactsForm";
import Fade from 'react-reveal/Fade';

function Contacts() {

    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={style.wrapper}>
                <Title text={'get in touch'}/>
                <Fade bottom>
                    <div className={style.mainBlock}>


                        <div className={style.messageBlock}>

                            <div className={style.message}>
                                <p>
                                    If you have any suggestion, project or even you want to say Hello... please fill out
                                    the
                                    form below
                                    and I will reply you shortly.
                                </p>
                                <p>
                                    Willing to talk over the phone or in person.
                                </p>
                            </div>

                            <div className={style.callBlock}>
                                <span className={style.call}>Call me:</span><span>+375-29-67-37-963</span>
                            </div>

                        </div>


                        {/*<ContactsForm/>*/}

                    </div>
                </Fade>
            </div>
            <Fade bottom>
                <Footer/>
            </Fade>
        </div>
    );
}

export default Contacts;
