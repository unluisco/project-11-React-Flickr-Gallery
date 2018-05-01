import React from 'react';
import Search from './Search.js';
import Results from './Results.js';

import apiKey from '../config.js';

const Cats = (props) => {

	return (
		<div className="container">
			<Search api={ apiKey } />
			<Results
				query={ "cats" }
				api={ props.api } />
		</div>
	);
}

export default Cats;
