import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="w-100 cf tc ph3 ph4-m ph6-l pv4 pv6-ns wow animated fadeInUp h-bg">
					<span>
						<a
							className="link white "
							target="_blank"
							href="mailto:mwachianalytics@gmail.com"
							rel="noopener noreferrer"
						>
							<span>mwachianalytics@gmail.com</span>
						</a>
					</span>
					<br />
					<span>Nairobi, &nbsp; Kenya</span>

					<ul className="list pl0 lh-copy">
						<li className="dib mr2">
							<a
								className="link white fs"
								target="_blank"
								href="https://www.linkedin.com/in/mwachi-simon-050825119/"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin-in" />
							</a>
						</li>
						&nbsp; &nbsp; &nbsp;
						<li className="dib mr2">
							<a
								className="link white fs"
								target="_blank"
								href="https://www.facebook.com/MwachiAnalytics"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook" />
							</a>
						</li>
						&nbsp; &nbsp; &nbsp;
						<li className="dib mr2">
							<a
								className="link white fs"
								target="_blank"
								href="https://www.twitter.com/MwachiAnalytics/"
								rel="noopener noreferrer"
							>
								<i className="fab fa-twitter" />
							</a>
						</li>
					</ul>
					<br />
					<br />

					<span className="w-100 db mv2 lh-copy">
						Copyright<i className="fa fa-fw fa-copyright" />2017 Ghub Tech. All rights reserved.
					</span>
				</footer>
			</div>
		);
	}
}

export default Footer;
