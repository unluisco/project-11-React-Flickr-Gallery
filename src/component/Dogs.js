import React from 'react';
import Nav from './Nav.js';
import Results from './Results.js';

const Dogs = (props) => {

	return (
		<div className="container">
			<Nav />
			<Results
				query={ "dogs" }
				api={ props.api } />
		</div>
	);
}

export default Dogs;
