import style from './App.module.scss'
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Projects from "./Components/Projects/Projects";
import Photo from "./Components/Photo/Photo";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";

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

            </div>
        </div>
    );
}

export default App;

