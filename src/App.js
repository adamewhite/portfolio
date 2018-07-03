import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from './components/Contact';
import CV from './components/CV';
import Projects from './components/Projects';
import Splash from './components/Splash';

import * as routes from './routes';

import './index.css';

let key = "burger";

const PageFade = (props) => 

  (<CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={500}
  />);


  /*    onEnter={() => { console.log(key + ' enter') }}
      onEntering={() => { console.log(key + ' entering') }}
      onEntered={() => { console.log(key + ' entered') }}
      onExit={() => { console.log(key + ' exit') }}
      onExiting={() => { console.log(key + ' exiting') }}
      onExited={() => { console.log(key + ' exited') }}
      mountOnEnter={true}
      unmountOnExit={true}*/


const Layout = ({ children }) => (
  <section id="container">
 
    {children}

  </section>
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const locationKey = this.props.location.pathname;

  	return (
  					<Layout>
	  					<TransitionGroup>
	  					  <PageFade key={locationKey}>

	  					  <section className="fix-container">
		  						
		               	<Switch location={this.props.location}>

			               	<Route
			               	  exact path={routes.SPLASH}
			               	  component={() => <Splash />}
			               	/>

			                 <Route
			                   exact path={routes.CONTACT}
			                   component={() => <Contact />}
			                 />

			                 <Route
			                   exact path={routes.CV}
			                   component={() => <CV />}
			                 />

			                 <Route
			                   exact path={routes.PROJECTS}
			                   component={() => <Projects />}
			                 />

		                </Switch>
		             </section>
		            </PageFade>
		          </TransitionGroup>    
             </Layout>

     )
  }
}

export default App;



