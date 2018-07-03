import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import LA from '../assets/images/la.jpg';
import '../stylesheets/Contact.css';

class Contact extends Component {
  render() {
    return (
    	<div>
    	<NavBar />
	      <section className="main"> 
	      	<h1 className="contact__email"><p>adam@adamewhite.com</p></h1>
	      	<img className="contact__display" src={LA} alt="watercolor" />
				</section>
				</div>
      );
  }
}

export default Contact;
