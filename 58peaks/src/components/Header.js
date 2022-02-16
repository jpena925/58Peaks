import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../data/58Peaks.svg'

function Header() {
	return (
		<section id="header-background">
			<div id="header">
				<Link to="/"><img src={logo} id="logo" /></Link>
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
