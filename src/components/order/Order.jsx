import './order.css'

import o1 from '../../img/order/1.jpg'
import o2 from '../../img/order/2.jpg'
import o3 from '../../img/order/3.jpg'

const Order = () => {
	return (
		<section class="order">
			<div class="order__container">
				<h2 class="order__title">Order online</h2>
				<div class="order__box">
					<div class="order__item">
						<img src={o1} alt="" class="order__img" />
							<p class="order__desc">Get your favorite teas delivered right to your doorstep with our reliable tea
								delivery service.</p>
					</div>
					<div class="order__item">
						<img src={o1} alt="" class="order__img" />
							<p class="order__desc">Experience the delight of freshly brewed coffee every morning with our convenient
								coffee subscription service.</p>
					</div>
					<div class="order__item">
						<img src={o3} alt="" class="order__img" />
							<p class="order__desc">Discover our exquisite tea and coffee gift sets, perfect for any occasion or special
								someone.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Order;