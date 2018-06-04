import React, { Component } from 'react';
import OrdersTable from './OrdersTable';


class Orders extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
            <th scope="col">Problem statement</th>
            <th scope="col">Project Type</th>
            <th scope="col">Software</th>
          </tr>
        </thead>
        <tbody>
          <OrdersTable />
        </tbody>
      </table>
    );
  }
}

export default Orders;
