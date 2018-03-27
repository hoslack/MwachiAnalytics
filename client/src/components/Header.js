import React, { Component } from 'react';
import logo from '../logo1.jpeg';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<header className="bg-white green tc pv4 avenir">
					<a className="w8 h5" href="/" title="Home">
						<img src={logo} className=" w8 h5" alt="Mwachi Analytics" />
					</a>
					<nav className="bt bb tc mw7 center mt4">
						<a className="f6 f5-l link bg-animate green b dib pa3 ph4-l" href="/">
							HOME
						</a>
						<Link to="/services" className="f6 f5-l link green b dib pa3 ph4-l" href="/portfolio">
							OUR SERVICES
						</Link>
						<a className="f6 f5-l link green b dib pa3 ph4-l" href="/">
							BLOG
						</a>
						<a className="f6 f5-l link green b dib pa3 ph4-l" href="/">
							ABOUT US
						</a>
						<a className="f6 f5-l link green b dib pa3 ph4-l" href="/">
							CONTACT US
						</a>
					</nav>
				</header>
			</div>
		);
	}
}

export default Header;
