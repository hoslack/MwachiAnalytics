import React, { Component } from 'react';
import logo from '../images/logo1.jpeg';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';

const nav_custom = {
	backgroundColor: '#13192E',
	border: 'none',
};

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<div>
				<Image src={logo} responsive alt="Mwachi Analytics" />
				<Navbar inverse collapseOnSelect style={nav_custom}>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#brand">Home</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem href="#">Our Services</NavItem>
							<NavItem href="#">Blog</NavItem>
							<NavItem href="#">About Us</NavItem>
							<NavItem href="#">Contact Us</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
