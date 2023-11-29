import './header.css'

function Header() {
	return (
		<header class="header">
			<div class="header__container">
				<h2 class="logo"><a href="#">Chafe</a></h2>
				<nav class="header__nav">
					<ul class="header__list">
						<li class="header__link"><a href="about.html">About</a></li>
						<li class="header__link"><a href="services.html">Services</a></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;