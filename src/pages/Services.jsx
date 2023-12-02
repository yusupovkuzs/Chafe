import './services.css'

import s1 from '../img/services/welcome.jpg'
import s2 from '../img/services/tea.jpg'
import s3 from '../img/services/premium.jpg'

const Services = () => {
	return (
		<main>

			<section class="welcome">
				<div class="welcome__container">
					<img src={s1} alt="" class="welcome__img" />
					<div class="welcome__text">
						<h2 class="welcome__title">Custom Blends for Unique Tastes</h2>
						<p class="welcome__desc">Experience the art of tea and coffee with our custom blends designed exclusively for
							your unique preferences. Handcrafted by our expert sommeliers, our blends offer a harmonious balance of
							flavors and aromas that will delight your senses. From delicate floral notes to rich and bold profiles,
							discover a personalized taste of Russia in every sip.</p>
					</div>
				</div>
			</section>

			<section class="specialty">
				<div class="specialty__container">
					<div class="specialty__text">
						<h2 class="specialty__title">Specialty Tea and Coffee Selection</h2>
						<p class="specialty__desc">Discover our extensive collection of specialty tea and coffee from around the
							world. We source only the finest blends and single-origin beans, ensuring exceptional taste and quality.
							Whether you're a tea connoisseur or a coffee lover, our selection has something to satisfy every palate.</p>
					</div>
					<img src={s2} alt="" class="specialty__img" />
				</div>
			</section>

			<section class="premium">
				<div class="premium__container">
					<img src={s3} alt="" class="premium__img" />
					<div class="premium__text">
						<h2 class="premium__title">Premium Tea and Coffee Selection</h2>
						<p class="premium__desc">Discover our exquisite collection of premium loose leaf teas and specialty coffee
							sourced from around the world. Indulge in the rich flavors and aromas that will transport your taste buds to
							a new level of enjoyment.</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Services;