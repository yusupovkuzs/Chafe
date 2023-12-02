import './order.css'

import o1 from '../../../img/order/1.jpg'
import o2 from '../../../img/order/2.jpg'
import o3 from '../../../img/order/3.jpg'

const Order = () => {
	return (
		<section className="order">
			<div className="order__container">
				<h2 className="order__title">Order online</h2>
				<div className="order__box">
					<div className="order__item">
						<img src={o1} alt="" className="order__img" />
							<p className="order__desc">Get your favorite teas delivered right to your doorstep with our reliable tea
								delivery service.</p>
					</div>
					<div className="order__item">
						<img src={o2} alt="" className="order__img" />
							<p className="order__desc">Experience the delight of freshly brewed coffee every morning with our convenient
								coffee subscription service.</p>
					</div>
					<div className="order__item">
						<img src={o3} alt="" className="order__img" />
							<p className="order__desc">Discover our exquisite tea and coffee gift sets, perfect for any occasion or special
								someone.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Order;