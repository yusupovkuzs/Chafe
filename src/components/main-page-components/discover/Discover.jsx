import './discover.css'

import { NavLink } from 'react-router-dom';

const Discover = () => {
	return ( 
		<section className="discover">
      <div className="discover__container">
        <h2 className="discover__title">Discover the Perfect Blend</h2>
        <NavLink to="service" className="discover__link">Explore Now</NavLink>
      </div>
    </section>
	 );
}
 
export default Discover;