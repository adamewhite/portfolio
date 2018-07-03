// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
