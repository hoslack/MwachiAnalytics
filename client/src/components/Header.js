import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
	render() {
		return (
			<div>
				<header class="h-bg white tc pv4 avenir">
					<a className="w3 h4" href="#" title="Home">
						<img src={logo} className=" w3 h4 " alt="Mwachi Analytics" />
					</a>
					<br />
					<span className="top-5 normal f3 f2-ns mv0 lh-title">
						Mwachi Analytics &amp; Consultancy
					</span>

					<h2 class="mt2 mb0 f6 fw4 ttu tracked">Data | Proof | Decisions</h2>
					<nav class="bt bb tc mw7 center mt4">
						<a class="f6 f5-l link bg-animate white dib pa3 ph4-l" href="/">
							HOME
						</a>
						<a class="f6 f5-l link white dib pa3 ph4-l" href="/portfolio">
							OUR SERVICES
						</a>
						<a class="f6 f5-l link white dib pa3 ph4-l" href="/shop">
							BLOG
						</a>
						<a class="f6 f5-l link white dib pa3 ph4-l" href="/about">
							ABOUT US
						</a>
						<a class="f6 f5-l link white dib pa3 ph4-l" href="/contact">
							CONTACT US
						</a>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;
