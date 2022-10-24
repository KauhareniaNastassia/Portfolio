import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import RemoteWork from "./RemoteWork/RemoteWork";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

function App() {
    return (
        <div className="app-wrapper">
             <Header/>

           {/* <Nav/>*/}

                <Main/>
                <Skills/>
                <Projects/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>


        </div>
    );
}

export default App;
