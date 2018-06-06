import React, { Component } from 'react';
import axios from 'axios';
import OrdersTable from './OrdersTable';


class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      singleOrder: {},
    };

    this.vieworder = this.vieworder.bind(this);
  }

  componentDidMount() {
    axios
      .get('api/orders')
      .then((res) => {
        this.setState({ data: res.data });
      }).catch((err) => {
        console.log(err);
      });
  }

  vieworder(id) {
    const result = this.state.data.filter(order => order._id === id);
    this.setState({ singleOrder: result[0] });
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="myModalHorizontal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <table className="table table-sm table-bordered">
                  <tbody>
                    <tr>
                      <td className="table-primary">Name</td>
                      <td>{this.state.singleOrder.name}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Email</td>
                      <td>{this.state.singleOrder.email}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Phone</td>
                      <td>{this.state.singleOrder.phone_number}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Problem Statement</td>
                      <td>{this.state.singleOrder.problem_statement}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Leading Channel</td>
                      <td>{this.state.singleOrder.leading_channel}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Project Type</td>
                      <td>{this.state.singleOrder.project_type}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Preferred Software</td>
                      <td>{this.state.singleOrder.preferred_software}</td>
                    </tr>
                    <tr>
                      <td className="table-primary">Description</td>
                      <td>{this.state.singleOrder.description}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type="button"
                  id="closeModal"
                  className="btn btn-danger pull-right"
                  data-dismiss="modal"
                >
                      Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col">Problem statement</th>
              <th scope="col">-</th>

            </tr>
          </thead>
          <tbody>
            <OrdersTable data={this.state.data} vieworder={this.vieworder} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
