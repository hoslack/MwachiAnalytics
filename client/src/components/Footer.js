import React, { Component } from 'react';

const style = {
	backgroundColor: '#13192E',
	color: 'white',
	textAlign: 'center',
	position: 'fixed',
	left: '0',
	bottom: '0',
	height: '30%',
	width: '100%',
};

const phantom = {
	display: 'block',
	padding: '20px',
	height: '60px',
	width: '100%',
};

const social = {
	display: 'flex',
	listStyle: 'none',
	paddingLeft: '47%',
	paddingBottom: -20,
	verticalAlign: 'baseline',
	background: 0,
};

const Footer = () => {
	return (
		<div>
			<div style={phantom} />
			<div style={style}>
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

				<ul style={social}>
					<li>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/mwachi-simon-050825119/"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin-in" />
						</a>
					</li>
					&nbsp; &nbsp; &nbsp;
					<li>
						<a
							target="_blank"
							href="https://www.facebook.com/MwachiAnalytics"
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook" />
						</a>
					</li>
					&nbsp; &nbsp; &nbsp;
					<li>
						<a
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

				<span>
					Copyright<i className="fa fa-fw fa-copyright" />2017 Ghub Tech. All rights reserved.
				</span>
			</div>
		</div>
	);
};

export default Footer;
