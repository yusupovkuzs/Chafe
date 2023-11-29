import './location.css'

const Location = () => {
	return (
		<section class="location">
			<div class="location__container">
				<div class="location__text">
					<h2 class="location__title">Location</h2>
					<p class="location__desc">Kazan', TA</p>
				</div>
				<div class="location__map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.8107777555401!2d49.12309505000335!3d55.78244435529148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead04c7ca0d1d%3A0x89d5259e566a4fb2!2z0KLQsNGC0LDRgNGB0LrQuNC5INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQkNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDQotC10LDRgtGAINC40LzQtdC90Lgg0JPQsNC70LjQsNGB0LPQsNGA0LAg0JrQsNC80LDQu9Cw!5e0!3m2!1sru!2sru!4v1700467374759!5m2!1sru!2sru"
						width={600} height={450} allowfullscreen="" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</section>
	);
}

export default Location;