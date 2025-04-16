import './app.scss'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';


const App = () => {
	return <div>
		<section id="Homepage">
    <Navbar/>
    <Hero/>
    </section>
		<section id="Services">parallex</section>
		<section>service</section>
		<section id="Portfolio">parallex</section>
		<section>Portfolio</section>
		<section>portfolio</section>
		<section>Portfolio</section>
		<section id="Contact">Contact</section>
	</div>;
};

export default App;
