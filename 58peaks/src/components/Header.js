import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<div>
      <NavLink to="/peaklist">Peak List</NavLink>
      <NavLink to="/mypeaks">My Peaks</NavLink>
			<NavLink to="/planmyhike">Plan My Hike</NavLink>
		</div>
	);
}

export default Header;
