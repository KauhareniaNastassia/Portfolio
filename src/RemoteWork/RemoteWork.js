import React from 'react'
import style from './RemoteWork.module.css'
import remoteWorkContainer from "../Common/Styles/Container.module.css";


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${style.remoteWorkContainer} ${remoteWorkContainer.container}`}>
                <h2 className={style.title}>I am considering options for remote work</h2>
                <button className={style.btn}>Hire me</button>
            </div>
        </div>
    );
}

export default RemoteWork;
