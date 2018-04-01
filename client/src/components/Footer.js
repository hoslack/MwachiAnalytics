import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
	render() {
		return (
			<Footer color="white" className="page-footer font-small pt-4 mt-4 ft-bg">
				<hr />
				<div className="text-center py-3">
					<span>
						<a
							className="link white "
							target="_blank"
							href="mailto:mwachianalytics@gmail.com"
							rel="noopener noreferrer"
						>
							<span>mwachianalytics@gmail.com</span>
						</a>
						<br />
					</span>
					<span>Nairobi, &nbsp; Kenya</span>
				</div>
				<hr />
				<div className="text-center">
					<ul className="list-unstyled list-inline">
						<li className="list-inline-item">
							<a
								className="btn-floating btn-sm btn-fb mx-1"
								target="_blank"
								href="https://www.facebook.com/MwachiAnalytics"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook white big-icon" />
							</a>
						</li>
						<li className="list-inline-item">
							<a
								className="btn-floating btn-sm btn-tw mx-1"
								target="_blank"
								href="https://www.twitter.com/MwachiAnalytics/"
								rel="noopener noreferrer"
							>
								<i className="fab fa-twitter white big-icon" />
							</a>
						</li>
						<li className="list-inline-item">
							<a
								className="btn-floating btn-sm btn-li mx-1"
								target="_blank"
								href="https://www.linkedin.com/in/mwachi-simon-050825119/"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin white big-icon" />
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-copyright text-center">
					<Container fluid>
						&copy; {new Date().getFullYear()} Copyright:{' '}
						<a href="github.com/hoslack" className="text-light">
							{' '}
							Ghub Tech{' '}
						</a>
					</Container>
				</div>
			</Footer>
		);
	}
}

export default FooterPage;
