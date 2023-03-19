import React from 'react';
import style from "./ContactsForm.module.scss";
import {useState} from "react";
import {useFormik} from "formik";
import axios from "axios";
import {Notifications} from "../Notifications/Notifications";

export const ContactsForm = () => {
    const [loading, setLoading] = useState(false)
    const [isValuesSend, setIsValuesSend] = useState(false)
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = 'Enter your name'
            }
            if (!values.email) {
                errors.email = 'Enter your email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Enter your message'
            }
            return errors
        },
        onSubmit: (values) => {
            setLoading(true)
            axios.post('https://gmail-smtp-ivory.vercel.app/sendMessage', values)
                .then(res => {
                    setIsValuesSend(true)
                    formik.resetForm()
                })
                .catch(error => {
                    setError(true)
                })
                .finally(() => {
                        setLoading(false)
                    }
                )
        }
    })

    return (
        <div>
            {isValuesSend
                ? <Notifications isValuesSend={isValuesSend}/>
                : <form className={style.form} onSubmit={formik.handleSubmit}>

                    <div className={style.inputWrapperBlock}>

                        <div className={style.inputItem}>

                            <div className={style.inputWrapper}>
                                <input
                                    type='text'
                                    className={style.input}
                                    placeholder=' '
                                    id='name'
                                    {...formik.getFieldProps('name')}
                                />
                                <label htmlFor='name'>Name</label>
                            </div>
                            <span className={style.error}>
                                    {formik.touched.name && formik.errors.name}
                                </span>

                        </div>

                        <div className={style.inputItem}>
                            <div className={style.inputWrapper}>
                                <input
                                    type='email'
                                    className={style.input}
                                    placeholder=' '
                                    id='email'
                                    {...formik.getFieldProps('email')}
                                />
                                <label htmlFor='email'>E-mail</label>
                            </div>
                            <span className={style.error}>
                                    {formik.touched.email && formik.errors.email}
                                </span>

                        </div>

                        <div className={style.inputItem}>
                            <div className={style.inputWrapper}>
                                <textarea
                                    className={style.textarea}
                                    placeholder=' '
                                    id='message'
                                    {...formik.getFieldProps('message')}
                                />
                                <label htmlFor='message'>Message</label>
                            </div>
                            <span className={style.error}>
                                    {formik.touched.message && formik.errors.message}
                            </span>
                        </div>

                    </div>

                    <button
                        disabled={!formik.dirty || !formik.isValid || loading}
                        type='submit'
                        className={style.submitBtn}>Send message
                    </button>

                    <div>
                        {error && <Notifications error={error}/>}
                    </div>
                </form>}
        </div>
    );
};
