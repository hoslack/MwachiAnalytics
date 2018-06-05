import React from 'react';


const OrdersTable = props =>
  props.data.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone_number}</td>
      <td>{item.email}</td>
      <td>{item.problem_statement}</td>
      <td><button
        onClick={() => props.vieworder(item._id)}
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#myModalHorizontal"
      >
        view
      </button>
      </td>
    </tr>
  ));
export default OrdersTable;
