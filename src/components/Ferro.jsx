import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Ferro.css';

class Ferro extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// const container = document.getElementById("screen");
		// container.style.opacity = ".8";
	}

	componentWillUnmount() {
		// const container = document.getElementById("screen");
		// container.style.opacity = "0";
	}

  render() {
    return (
	      <section className="section"> 
					Ferro
					<NavLink to="/">Return to Front Page</NavLink>
				</section>
      );
  }
}

export default Ferro;
