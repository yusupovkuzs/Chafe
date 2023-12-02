import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Services from './pages/Services'


import './styles/reset.css';
import './styles/common.css';


function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<AboutUs />} />
					<Route path="service" element={<Services />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
