import style from './App.module.scss'
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./Skills/About";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Photo from "./Photo/Photo";
import Skills from "./Skills/Skills/Skills";

function App() {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Photo/>

            <div className={style.appWrapperContent}>

                <Main/>
                <About/>
                <Skills/>
                <Projects/>
                <Contacts/>

                {/*найти все иконки чб
                перепроверить и вставить все варайаблс
                в поддержку по поводу блока фото*/}

            </div>
        </div>
    );
}

export default App;
