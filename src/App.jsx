import './app.scss'
//import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from "./components/projects/Projects";



const App = () => {
	return <div>
		<section id="Homepage">
    <Navbar/>
    {/*<Hero>*/}
    <Home/>
    </section>
		<section id="About">
    <About/>
    </section>
		<section id="Projects">
    <Projects/>
    </section>
		<section id="Contact">
    <Contact />
    </section>
	</div>;
};

export default App;
