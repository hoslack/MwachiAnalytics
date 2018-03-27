import React, { Component } from 'react';
import RenderCard from './RenderCard';

class OurServices extends Component {
	render() {
		return (
			<div className="flex flex-column gray-bg">
				<div className=" pv4 flex flex-wrap">
					<RenderCard />
				</div>
			</div>
		);
	}
}

export default OurServices;
