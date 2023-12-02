import './gallery.css'

import g1 from '../../../img/gallery/1.jpg'
import g2 from '../../../img/gallery/2.jpg'
import g3 from '../../../img/gallery/3.jpg'
import g4 from '../../../img/gallery/4.jpg'
import g5 from '../../../img/gallery/5.jpg'
import g6 from '../../../img/gallery/6.jpg'

const Gallery = () => {
	return ( 
		<section className="gallery">
		<div className="gallery__container">
			<div className="gallery__box">
				<div className="gallery__item"><img src={g1} alt="" /></div>
				<div className="gallery__item"><img src={g2} alt="" /></div>
				<div className="gallery__item"><img src={g3} alt="" /></div>
				<div className="gallery__item"><img src={g4} alt="" /></div>
				<div className="gallery__item"><img src={g5} alt="" /></div>
				<div className="gallery__item"><img src={g6} alt="" /></div>
			</div>
		</div>
	</section>
	 );
}
 
export default Gallery;