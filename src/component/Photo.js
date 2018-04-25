import React from 'react';

const Photo = (props) => (

		<li key={ props.id }>
			<img
				src={ props.url }
				key={ props.id }
				alt="" />
		</li>
);

export default Photo;
