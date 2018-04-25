import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList.js';

class Results extends Component {

	constructor() {

		super();

		this.state = {
			keyword: '',
			photos: []
		}
	}

	componentDidMount() {
		if (this.props.query !== "") {
			axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${this.props.query}&per_page=16&format=json&nojsoncallback=1`)

			.then((response) => {
				this.setState({
					keyword: this.props.query,
					photos: response.data.photos.photo
				})
			})

			.catch((error) => {
				console.log('error', error);
			});
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({keyword: newProps.query});
		this.performSearch(newProps.query);
	}

	performSearch = (query) => {
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)

		.then((response) => {
			this.setState({
				photos: response.data.photos.photo
			});
		})

		.catch((error) => {
			console.log('error', error);
		});
	}

	render() {

		return (
			<PhotoList
				photos={ this.state.photos }
				query={ this.state.keyword } />
		)
	}
}

export default Results;
