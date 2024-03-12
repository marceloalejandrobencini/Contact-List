import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contacts" className="btn btn-primary mr-2">
					Contacts
				</Link>
				<Link to="/add-contact" className="btn btn-success">
					Add New Contact
				</Link>
			</div>
		</nav>
	);
};
