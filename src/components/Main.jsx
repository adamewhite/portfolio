import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Main.css';

class Main extends Component {
	constructor(props) {
		super(props);
		// this.fadeItems = this.fadeItems.bind(this);
		// this.unfadeItems = this.unfadeItems.bind(this);
	}

	componentDidMount() {
		// const container = document.getElementById("screen");
		// container.style.opacity = ".3";
	}

	componentWillUnmount() {
		// const container = document.getElementById("container");
		// container.style.opacity = ".7";
	}


	// fadeItems(e, title) {
	// 	let items = [];
	// 	items = document.getElementsByClassName("main__list--item");
	// 	// let display = document.getElementById("display");
	// 	let container = document.getElementsByClassName("container")[0];
	// 	// console.log("e", e);
	// 	if (items.length > 0) {
	// 		[...items].map(item => {
	// 			// console.log(e);
	// 			console.log("title", title);
	// 			if (item.innerHTML !== e.target.innerHTML) {
	// 				item.style.opacity = .5;
	// 				// display.style.backgroundImage = "url(" + `${title}` + ")";
	// 				container.style.background = "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, .2)), url(" + `${Desert}` + ")";
	// 				console.log("desert", Desert);
	// 			}
	// 		});
	// 	}
	// }

	// unfadeItems() {
	// 	let items = document.getElementsByClassName("main__list--item");
	// 	// let display = document.getElementById("display");
	// 	let container = document.getElementsByClassName("container")[0];
	// 	if (items.length > 0) {
	// 		[...items].map(item => {
	// 			item.style.opacity = 1;
	// 			// display.style.backgroundImage = `url(${Bird})`;
	// 			container.style.background = "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))";
	// 		});
	// 	}
	// }

  render() {
    return (
	      <div>

	      	<article className="main">
	      		<ul className="main__list">
	      			<li className="main__list--item"
	      					value="Ferro">
	      				<NavLink to="/ferro"><p>FERRO-GROMLEY AWARDS</p></NavLink>
	      			</li>
	      			<li className="main__list--item"
		      			name="Bankruptcy">
	      				<NavLink to="/bankruptcy"><p>BANKRUPTCY TRUST SEARCH</p></NavLink>
	      			</li>
	      			<li className="main__list--item"
		      			name="Ltrain">
	      				<NavLink to="/ltrain"><p>LTRAIN.INFO</p></NavLink>
      				</li>
	      		</ul>
	      	</article>
	      	<aside className="sidebar">
	      		<ul className="sidebar__list">
	      			<li className="sidebar__list--item"><a className="sidebar__list--link" href="https://twitter.com/awhitedude" target="_blank">tw</a></li>
	      			<li className="sidebar__list--item">•</li>
	      			<li  className="sidebar__list--item"><a className="sidebar__list--link" href="https://www.facebook.com/adamewhite" target="_blank">fb</a></li>
	      			<li className="sidebar__list--item">•</li>
	      			<li  className="sidebar__list--item"><a className="sidebar__list--link" href="https://www.instagram.com/awhitedude" target="_blank">ig</a></li>
	      		</ul>
	      	</aside>
{/*	      	<div id="display">
	      	</div>*/}
	      </div>
      );
  }
}

export default Main;


									// onMouseEnter={(e) => this.fadeItems(e, Ferro)}
	      		// 			onMouseLeave={this.unfadeItems}
