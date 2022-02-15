import React from "react";
import { NavLink } from "react-router-dom";
import image2 from '../data/pngwing.com (3).png'

function Header() {
	return (
		<section id="header-background">
			<div id="header">
				<img src={image2} id="fake-logo" />
				<div>
				<NavLink to="/peaklist">Peak List</NavLink>
				<NavLink to="/mypeaks">My Peaks</NavLink>
				<NavLink to="/planmyhike">Plan My Hike</NavLink>
				</div>
			</div>
		</section>
	);
}

export default Header;
