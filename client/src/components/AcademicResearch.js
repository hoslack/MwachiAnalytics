import React from 'react';
import data from '../service_data';

const AcademicResearch = props =>
  data[0].values.map((item, index) => (
    <tr key={index}>
      <td key={index + 1}>
        <button className="btn btn-primary" data-toggle="modal" data-target="#myModalHorizontal">
          {item}
        </button>
      </td>
    </tr>
  ));

export default AcademicResearch;
