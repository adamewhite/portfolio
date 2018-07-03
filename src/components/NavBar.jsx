import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

class NavBar extends Component {
	// constructor(props) {
	// 	super(props);
	// }



  render() {
    return (
	      <div className="navbar">
	      	<div className="banner">
	      		<h1 className="banner__name"><NavLink to="/">ADAM E. WHITE</NavLink></h1>
	      		<h1 className="banner__title"><NavLink to="/">FRONT-END DEVELOPER</NavLink></h1>
	      	</div>
	  			<div className="subbanner">
	  				<ul className="subbanner__list">
	  					<li className="subbanner__list--item"><NavLink to="/projects">PROJECTS</NavLink></li>
	  					<li className="subbanner__list--item">|</li>
	  					<li className="subbanner__list--item"><NavLink to="/cv">CV</NavLink></li>
	  					<li className="subbanner__list--item">|</li>
	  					<li className="subbanner__list--item"><NavLink to="/contact">CONTACT</NavLink></li>
	  				</ul>
	  			</div>
	      </div>
      );
  }
}

export default NavBar;