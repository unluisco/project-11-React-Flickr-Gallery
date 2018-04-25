import React from 'react';
import Results from './Results.js';

const Horses = (props) => {

	return (
		<Results
			query={ "horses" }
			api={ props.api } />
	);
}

export default Horses;
