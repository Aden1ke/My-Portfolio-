import './app.scss'
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
//import Contact from './components/contact/Contact';
//import Projects from "./components/projects/Projects";



const App = () => {
    return (
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <section id="Homepage">
            <Home />
          </section>

        {/* Other sections would go here inside the 'content' div */}
          <section id="About">
            <About />
          </section>
      {/*
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>*/}
        </div>
      </div>
  );
};
  
export default App;
