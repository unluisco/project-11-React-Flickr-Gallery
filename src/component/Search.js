import React, { Component } from 'react';
import icon from './search.svg';
import Nav from './Nav.js';
import Results from './Results.js';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: props.query
		};
	}

	state = { query: '' };

	pass = { input: '' };

	onSearchChange = (event) => {
		this.pass.input = event.target.value;
	};

	handleSubmit = (event) => {
		event.preventDefault();
		event.currentTarget.reset();
		this.setState({ query: this.pass.input });
	};

	render() {

		return (
			<div>
				<form
					className="search-form"
					onSubmit={ this.handleSubmit }>
					<input
						type="search"
						name="search"
						placeholder="Search"
						onChange={ this.onSearchChange } />

					<button
						type="submit"
						className="search-button">
						<img
							src={ icon }
							alt="" />
					</button>
				</form>

				<Nav />

				<Results
					query={ this.state.query }
					api={ this.props.api } />
			</div>
		);
	};
}
