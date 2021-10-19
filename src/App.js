import './App.css';
import {Header}  from "./components/Header/Header"
import {Projects} from "./components/Projects/Projects"
import {Skills} from "./components/Skills/Skills"
import {Footer} from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
