import React, { Component } from 'react';
import data from '../service_data';

const AnalysisTraining = props => {
	return data[2].values.map((item, index) => {
		return (
			<tr key={index}>
				<td key={index + 1}>
					<button onClick={props.onOpenModal} className="btn btn-primary">
						{item}
					</button>
				</td>
			</tr>
		);
	});
};

export default AnalysisTraining;
