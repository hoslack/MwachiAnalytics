import React, { Component } from 'react';
import data from '../service_data';

const DataAnalysis = props => {
	return data[1].values.map((item, index) => {
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

export default DataAnalysis;
