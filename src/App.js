import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AboutUs from './components/about-us/AboutUs'
import Discover from './components/discover/Discover'
import Gallery from './components/gallery/Gallery'
import Quote from './components/quote/Quote'
import Order from './components/order/Order'
import Location from './components/location/Location'
import Footer from './components/footer/Footer'

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<AboutUs />
			<Discover />
			<Gallery />
			<Quote />
			<Order />
			<Location />
			<Footer />
		</div>
	);
}

export default App;
