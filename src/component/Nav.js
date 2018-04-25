import React from 'react';
import { Link } from 'react-router-dom';

// component that list every route available.
const Nav = () => {

	return (
		<div>
			<nav className="main-nav">
				<ul>
					<li>
						<Link to="/cats">Cats</Link>
					</li>

					<li>
						<Link to="/dogs">Dogs</Link>
					</li>

					<li>
						<Link to="/horses">Horses</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
