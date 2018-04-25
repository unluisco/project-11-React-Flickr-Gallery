import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// get a Flickr API key.
import apiKey from './config.js';

// have components ready to use.
import Search from './component/Search.js';
import Cats from './component/Cats.js';
import Dogs from './component/Dogs.js';
import Horses from './component/Horses.js';

const App = () => {

	return (
		<BrowserRouter>
			<div className="container">
				<Switch>
					<Route exact path="/" render={ () => (<Search api={ apiKey } />) } />

					<Route path="/cats" render={ () => (<Cats api={ apiKey } />) } />

					<Route path="/dogs" render={ () => (<Dogs api={ apiKey } />) } />

					<Route path="/horses" render={ () => (<Horses api={ apiKey } />) } />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
