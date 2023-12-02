// Main Page
import Hero from '../components/main-page-components/hero/Hero'
import AboutUs from '../components/main-page-components/about-us/AboutUs'
import Discover from '../components/main-page-components/discover/Discover'
import Gallery from '../components/main-page-components/gallery/Gallery'
import Quote from '../components/main-page-components/quote/Quote'
import Order from '../components/main-page-components/order/Order'
import Location from '../components/main-page-components/location/Location'

const Home = () => {
	return (
		<>
			<Hero />
			<AboutUs />
			<Discover />
			<Gallery />
			<Quote />
			<Order />
			<Location />
		</>
	);
}

export default Home;