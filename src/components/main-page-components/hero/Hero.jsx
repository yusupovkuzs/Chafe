import './hero.css'

import { NavLink } from 'react-router-dom';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__container">
				<h1 className="hero__title">Savor the Perfect Brew</h1>
				<p className="hero__desc">Indulge in the finest selection of tea and coffee at Chafe, where every sip is a moment of
					bliss.</p>
				<NavLink to="about" className="hero__link">Discover</NavLink>
			</div>
		</section>);
}

export default Hero;