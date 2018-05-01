import React from 'react';
import Search from './Search.js';
import Results from './Results.js';

import apiKey from '../config.js';

const Horses = (props) => {

	return (
		<div className="container">
			<Search api={ apiKey } />
			<Results
				query={ "horses" }
				api={ props.api } />
		</div>
	);
}

export default Horses;
