import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
import Hollywood from '../assets/images/hollywood.jpg';
import Subway from '../assets/images/subways.jpg';
import IronLung from '../assets/images/ironlung.jpg';
import Bookstore from '../assets/images/bookstore.jpg';
import Snoopy from '../assets/images/snoopy.png';
import FerroLogo from '../assets/images/ferrologo.png';
import BankruptcyLogo from '../assets/images/bankruptcylogo.png';
import LTrainLogo from '../assets/images/ltrainlogo.png';
import Sargent2 from '../assets/images/sargent2.jpg';

import '../stylesheets/Splash.css';

class Splash extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (	<div>
								<div className="display">
									<div className="display__left">
										<h2 className="display__name">ADAM E. WHITE</h2>
										<h2 className="display__title">FRONT-END DEVELOPER</h2>
									</div>
									<div className="display__right">
										<ul className="display__list">
											<li className="display__item display__contact"><NavLink to="/contact">CONTACT</NavLink></li>
											<li className="display__item display__cv"><NavLink to="/cv">CURRICULUM VITAE</NavLink></li>
											<li className="display__item display__projects"><NavLink to="/projects">PROJECTS</NavLink></li>
										</ul>
									</div>
								</div>	
								<img className="sargent" src={Sargent2} alt="Sargent Watercolor" />
							</div>
      );
  }
}

export default Splash;



