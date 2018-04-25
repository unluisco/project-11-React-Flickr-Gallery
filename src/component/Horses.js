import React from 'react';
import Nav from './Nav.js';
import Results from './Results.js';

const Horses = (props) => {

	return (
		<div className="container">
			<Nav />
			<Results
				query={ "horses" }
				api={ props.api } />
		</div>
	);
}

export default Horses;
