import style from './RemoteWork.module.scss'
import remoteWorkContainer from "../Common/Styles/Container.module.scss";
import Button from "../Common/Components/Button/Button";


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${style.remoteWorkContainer} ${remoteWorkContainer.container}`}>
                <h2 className={style.title}>I am considering options for remote work</h2>
                <Button text={'Hire me'}/>
            </div>
        </div>
    );
}

export default RemoteWork;
