import './welcome.css'
import WelcomeBg from '../../../img/about.jpg'

const WelcomeAbout = () => {
	return (
		<section className="about__img">
			<div className="img">
				<img src={WelcomeBg} alt="" />
			</div>
		</section>
	);
}

export default WelcomeAbout;