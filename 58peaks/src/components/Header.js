import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../data/58Peaks.svg'

function Header() {
	return (
		<section id="header-background">
			<div id="header">
				<img src={logo} id="logo" />
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
