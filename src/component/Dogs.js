import React from 'react';
import Search from './Search.js';

import apiKey from '../config.js';

const Dogs = (props) => {

	return (
		<div className="container">
			<Search api={ apiKey } query={ "dogs" } />
		</div>
	);
}

export default Dogs;
