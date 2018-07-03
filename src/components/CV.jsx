import React, { Component } from 'react';
import FatKid from '../assets/images/fatkid.jpg';
import NavBar from './NavBar';
import '../stylesheets/CV.css';

class CV extends Component {
  render() {
    return (
    	<div>
    	<NavBar />
    	<div className="cv-holder">
	      <section className="section"> 
	      	<div className="left">
		      	<h2 className="heading">Education</h2>
		      	<ul className="heading__list">
		      		<li className="heading__list--item">
		      			<h3 className="heading__list--text">BA, University of California, Berkeley</h3>
		      			<h4 className="heading__list--subtext">Art History and Critical Theory</h4>
		      			<h4 className="heading__list--subtext">Regents and Chancellors Scholar</h4>
		      		</li>
		      		<li className="heading__list--item">
		      			<h3 className="heading__list--text">MA, University of Chicago</h3>
		      			<h4 className="heading__list--subtext">History, Theory and Aesthetics</h4>
		      		</li>
		      	</ul>
		      	<img className="portrait" src={FatKid} alt="self-portrait" />
					</div>

					<div className="right">
		      	<h2 className="heading">Experienced in</h2>
		      	<ul className="heading__list">
			      	<li className="heading__list--item">Javascript <div className="heading__list--subitem">(ES6+, React + Redux, Lodash, CommonJS)</div></li>
			      	<li className="heading__list--item">Unit testing <div className="heading__list--subitem">(Jest)</div></li>
			      	<li className="heading__list--item">Build tools <div className="heading__list--subitem">(Webpack, NPM)</div></li>
			      	<li className="heading__list--item">CSS <div className="heading__list--subitem">(SCSS, CSS3, modular components using BEM, responsive design)</div></li>
			      	<li className="heading__list--item">HTML5 <div className="heading__list--subitem">(semantic, template engines like Jade)</div></li>
			      	<li className="heading__list--item">Consuming RESTful APIs</li>
			      	<li className="heading__list--item">Git <div className="heading__list--subitem">(trunk based, Git flow)</div></li>
		      	</ul>

		      	<p className="history">I know my way around Node.js, Express and Ruby on Rails and have experience working with different PaaSs like Heroku and AWS. In the past. I've worked with AngularJS 1.x, jQuery, LESS and Grunt.</p>
	      	</div>
				</section>
			</div>
			</div>
      );
  }
}

export default CV;
