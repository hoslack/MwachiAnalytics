import React from 'react';

const data = [1, 1, 1, 1, 1, 1];

const OrdersTable = props =>
  data.map((item, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Email</th>
      <th scope="col">Problem statement</th>
      <th scope="col">Project Type</th>
      <th scope="col">Software</th>
    </tr>
  ));
export default OrdersTable;
