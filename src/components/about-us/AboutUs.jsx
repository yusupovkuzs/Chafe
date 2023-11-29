import './about-us.css'
import about_us_img from '../../img/about-us.jpg'

const AboutUs = () => {
	return (
		<section class="about-us">
			<div class="about-us__container">
				<div class="about-us__text">
					<h2 class="about-us__title">About us</h2>
					<p class="about-us__desc">Welcome to Chafe, your premier destination for exceptional tea and coffee in Kazan',
						TA. With a passion for quality and a commitment to excellence, we strive to provide our customers with the
						finest selection of beverages.</p>
					<p class="about-us__desc">At Chafe, we understand that a great cup of tea or coffee is more than just a drink
						-
						it's an experience. That's why we source our products from the best suppliers, ensuring that every sip is
						rich
						in flavor and aroma. Whether you're a connoisseur or a casual drinker, we have something to satisfy your
						taste
						buds. Visit us today and indulge in the perfect blend of tradition and innovation.</p>
				</div>
				<div class="about-us__img">
					<img src={about_us_img} alt="" />
				</div>
			</div>
		</section>
	);
}

export default AboutUs;