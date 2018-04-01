import React, { Component } from 'react';
import logo from '../images/logo.jpg';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false,
			dropdownOpen: false,
		};
		this.onClick = this.onClick.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse,
		});
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		});
	}

	render() {
		return (
			<div className="bg-white">
				<img src={logo} class="img-fluid" alt="Responsive image" />
				<nav class="navbar navbar-expand-lg nav-bg">
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link text-light" href="/services">
									HOME
								</a>
							</li>
							<li class="nav-item active">
								<a class="nav-link text-light" href="/services">
									SERVICES
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-light" href="/blog">
									BLOG
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-light" href="/about">
									ABOUT
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Header;
