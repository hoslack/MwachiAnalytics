import React, { Component } from 'react';
import data from '../service_data';

class DataAnalysis extends Component {
	render() {
		return data[1].values.map((item, index) => {
			return (
				<tr key={index}>
					<td key={index + 1}>
						<a href="/">{item}</a>
					</td>
				</tr>
			);
		});
	}
}

export default DataAnalysis;
