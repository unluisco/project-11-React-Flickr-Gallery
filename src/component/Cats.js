import React from 'react';
import Search from './Search.js';

import apiKey from '../config.js';

const Cats = (props) => {

	return (
		<div className="container">
			<Search api={ apiKey } query={ "cats" } />
		</div>
	);
}

export default Cats;
