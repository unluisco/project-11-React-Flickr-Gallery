import React from 'react';
import Nav from './Nav.js';
import Results from './Results.js';

const Cats = (props) => {

	return (
		<div className="container">
			<Nav />
			<Results
				query={ "cats" }
				api={ props.api } />
		</div>
	);
}

export default Cats;
