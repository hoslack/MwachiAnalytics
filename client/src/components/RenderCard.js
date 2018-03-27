import React from 'react';
import data from '../service_data';

const RenderCard = () => {
	return data.map((item, index) => {
		return (
			<article key={index} className="bg-white mw6 mv4 w-49 pa3 mr2 center br4 shadow-5">
				<img src={item.image} className="w-100 db" alt={item.topic} />
				<div className="pa3">
					<a href="/" className="link dim lh-title">
						{item.topic}
						<small className="gray db pv2">Check Details</small>
					</a>
				</div>
			</article>
		);
	});
};

export default RenderCard;
