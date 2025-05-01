import './app.scss'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';


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
		<section>service</section>
		<section id="Portfolio">parallex</section>
		<section>Portfolio</section>
		<section>portfolio</section>
		<section>Portfolio</section>
		<section id="Contact">Contact</section>
	</div>;
};

export default App;
