import './app.scss'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


const App = () => {
	return <div>
		<section id="Homepage">
    <Navbar/>
    {/*<Hero>*/}
    <Hero/>
    </section>
		<section id="About">
    <About/>
    </section>
		<section id="Portfolio">
    <Portfolio/>
    </section>
		<section id="Contact">
    <Contact />
    </section>
	</div>;
};

export default App;
