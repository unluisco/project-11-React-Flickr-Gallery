import React from 'react';
import Search from './Search.js';

import apiKey from '../config.js';

const Horses = (props) => {

	return (
		<div className="container">
			<Search api={ apiKey } query={ "horses" } />
		</div>
	);
}

export default Horses;
