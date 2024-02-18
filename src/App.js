
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import { Contact } from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/Education";
function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Intro/>
        <Education/>
        <About/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
