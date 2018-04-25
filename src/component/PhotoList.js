import React from 'react';
import Photo from './Photo.js';

const PhotoList = (props) => {
	const results = props.photos;
	const query = props.query;
	let searchResults = results.map(
		photo =>
			<Photo
				url={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` }
				key={ photo.id } />
	);

	return (
		<div className="photo-container">
			<h2>{ query }</h2>
			<ul>{ searchResults }</ul>
		</div>
	);
}

export default PhotoList;
