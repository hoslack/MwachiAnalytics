import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer class="w-100 cf tc ph3 ph4-m ph6-l pv4 pv6-ns wow animated fadeInUp h-bg">
					<span>
						<a class="link white " target="_blank" href="mailto:mwachianalytics@gmail.com">
							<span>mwachianalytics@gmail.com</span>
						</a>
					</span>
					<br />
					<span>Nairobi, &nbsp; Kenya</span>

					<ul class="list pl0 lh-copy">
						<li class="dib mr2">
							<a
								class="link white fs"
								target="_blank"
								href="https://www.linkedin.com/in/mwachi-simon-050825119/"
							>
								<i class="fab fa-linkedin-in" />
							</a>
						</li>
						&nbsp; &nbsp; &nbsp;
						<li class="dib mr2">
							<a
								class="link white fs"
								target="_blank"
								href="https://www.facebook.com/MwachiAnalytics"
							>
								<i class="fab fa-facebook" />
							</a>
						</li>
						&nbsp; &nbsp; &nbsp;
						<li class="dib mr2">
							<a
								class="link white fs"
								target="_blank"
								href="https://www.twitter.com/MwachiAnalytics/"
							>
								<i class="fab fa-twitter" />
							</a>
						</li>
					</ul>
					<br />
					<br />

					<span class="w-100 db mv2 lh-copy">
						Copyright<i class="fa fa-fw fa-copyright" />2017 Ghub Tech. All rights reserved.
					</span>
				</footer>
			</div>
		);
	}
}

export default Footer;
