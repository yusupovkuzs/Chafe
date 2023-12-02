import './header.css'

import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<NavLink to="/" className="logo"><h2>Chafe</h2></NavLink>
				<nav className="header__nav">
					<ul className="header__list">
						<li className="header__link"><NavLink to="about" className="header__link-item">About</NavLink></li>
						<li className="header__link"><NavLink to="service" className="header__link-item">Services</NavLink></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;