import React, { Component } from 'react';
import logo from '../images/logo1.jpeg';

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
					<a class="navbar-brand text-light" href="/">
						Home
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<a class="nav-link text-light" href="/services">
									Our Services
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-light" href="/blog">
									Blog
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-light" href="/about">
									About Us
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
