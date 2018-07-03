import React, { Component } from 'react';
import NavBar from './NavBar';
import Ferro from '../assets/images/ferrologo.png';
import Ltrain from '../assets/images/ltrainlogo.png';
import Bankruptcy from '../assets/images/bankruptcylogo.png';
import Wavy from '../assets/images/wavy.jpg';
import '../stylesheets/Projects.css';

class Projects extends Component {
  render() {
    return (
    	<div>
    		<NavBar />
	      <div className="projects"> 
	      	<section className="projects__section">
	      		<div className="projects__image-container">
	      			<img className="projects__image" src={Ferro} alt="ferro" />
	      		</div>
	      		<div className="projects__description-container">
		      		<div className="projects__description">
		      			A website for the Ferro-Gromley Literary Award, annually presented by the Publishing Triangle at the New School in New York to the best of LGBTQ+ fiction and poetry of the year. 
		      		</div>
	      		</div>
	      	</section>
	      	<section className="projects__section">
	      		<div className="projects__image-container">
	      			<img className="projects__image" src={Bankruptcy} alt="bankruptcy" />
	      		</div>
	      		<div className="projects__description-container">
		      		<div className="projects__description">
		      			A search app for people who have been injured by asbestos exposure to help them to find and apply for money owed them by now bankrupt companies whose assets have been converted into trusts.
		      		</div>
	      		</div>
	      	</section>
	      	<section className="projects__section">
	      		<div className="projects__image-container">
	      			<img className="projects__image" src={Ltrain} alt="ltrain" />
	      		</div>
	      		<div className="projects__description-container">
		      		<div className="projects__description">
		      			An online resource for those who live along or regularly take the L Train in New York in anticipation of its 15-month closure and the MTA's lackluster efforts to publicize alternative transportation routes.
		      		</div>
	      		</div>
	      	</section>
				</div>
				{/*<img className="wavy" src={Wavy} alt="wavy" />*/}
				</div>
      );
  }
}

export default Projects;
