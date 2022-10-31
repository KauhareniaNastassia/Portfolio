import style from './App.module.scss'
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./Skills/About";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Photo from "./Photo/Photo";

function App() {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Photo/>

            <div className={style.appWrapperContent}>

                <Main/>
                <About/>
                <Projects/>

                <Contacts/>
                {/*<Footer/>*/}

            </div>
        </div>
    );
}

export default App;
