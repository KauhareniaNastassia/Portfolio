import React, {useEffect, useState} from 'react';
import style from "./Notifications.module.scss";
import Fade from 'react-reveal/Fade';

export const Notifications = (props) => {


    return (
        <Fade bottom>
            <div
                className={props.isValuesSend ? `${style.notificationWrapper} ${style.successMessage}` : `${style.notificationWrapper} ${style.errorMessage}`}>
                {props.isValuesSend &&
                    <div>Your mail has been successfully sent. As soon as I have time, I will definitely contact
                        you.</div>
                }
                {props.error &&
                    <div>Something went wrong, please try again later. Or just call me right now=)</div>
                }
            </div>
        </Fade>
    );
};

