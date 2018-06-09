import React, { Component } from 'react';
import axios from 'axios';
import AcademicResearch from './AcademicResearch';
import DataAnalysis from './DataAnalysis';
import AnalysisTraining from './AnalysisTraining';

import pic1 from '../images/data_a.jpg';
import pic2 from '../images/bigdata.jpg';
import pic3 from '../images/Data-Analysis.jpg';

class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const phone_number = event.target.phone_number.value;
    const problem_statement = event.target.problem_statement.value;
    const leading_channel = event.target.leading_channel.value;
    const project_type = event.target.project_type.value;
    const preferred_software = event.target.preferred_software.value;
    const description = event.target.description.value;
    const payment = event.target.payment.value;
    const request_data = {
      name,
      phone_number,
      problem_statement,
      leading_channel,
      project_type,
      preferred_software,
      description,
      payment,
    };


    axios
      .post('/api/orders', request_data)
      .then((res) => {
        console.log(res.data);
        alert('Your Order Has Been Submitted Successfully');
      })
      .catch((err) => {
        console.log(err);
        alert('There was an error, please try submitting again!!');
      });

    document.getElementById('closeModal').click();
  }

  render() {
    return (
      <div className="container">
        {/* <!-- Modal --> */}
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
                <form className="montform" id="reused_form" onSubmit={this.handleSubmit}>
                  <span>Book Service</span>
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="phone_number"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="problem_statement"
                      type="text"
                      className="form-control"
                      required
                      placeholder="How may we help you?"
                      id="query"
                    />
                  </div>
                  <div className="form-group">
                    <select name="leading_channel" className="form-control">
                      <option value="">How did you here about us?</option>
                      <option value="" />
                      <option value="Internet Search">Internet Search</option>
                      <option value="Recommended by friend">Recommended by friend</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="project_type" className="form-control">
                      <option value="">Project Type</option>
                      <option value="" />
                      <option value="Student">Student</option>
                      <option value="Corporation"> Corporation</option>
                      <option value="Nonprofit"> Nonprofit</option>
                      <option value="Other"> Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      name="preferred_software"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Prefered Softwares?"
                    />
                  </div>
                  <div className="form-group">
                    <select name="payment" className="form-control">
                      <option value="">Mode of Payment Prefered</option>
                      <option value="" />
                      <option value="MPESA">MPESA</option>
                      <option value="T-CASH">T-CASH</option>
                      <option value="Airtel Money">Airtel Money</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Airtel Money">VISA</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="description" className="form-control" placeholder="Message" />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      id="closeModal"
                      className="btn btn-danger pull-left"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary pull-right">
                      SUBMIT
                    </button>

                    <div className="ease" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* end modal */}
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                      <span className="glyphicon glyphicon-th" />ACADEMIC SUPPORT
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <table className="table">
                      <tbody>
                        <AcademicResearch />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                      <span className="glyphicon glyphicon-th" />DATA ANALYSIS
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    <table className="table">
                      <tbody>
                        <DataAnalysis />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                      <span className="glyphicon glyphicon-th" />ANALYSIS TRAINING
                    </a>
                  </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                  <div className="panel-body">
                    <table className="table">
                      <tbody>
                        <AnalysisTraining />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                      <span className="glyphicon glyphicon-th" />ADVISING &amp; CONSULTING
                    </a>
                  </h4>
                </div>
                <div id="collapseFive" className="panel-collapse collapse">
                  <div className="panel-body">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <button
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#myModalHorizontal"
                              href="#"
                            >
                              ADVISING
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#myModalHorizontal"
                              href="#"
                            >
                              CONSULTING
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-8">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src={pic1} alt="First slide" />
                  <div className="carousel-caption d-none d-md-block nav-bg myopacity">
                    <h1>Reliable Services. Meaningful Insights.</h1>
                    <p>
                      At Mwachi Analytics & Consultancy, your needs come first. We tailor all our
                      services to suit each client, because no two businesses are alike. Our experts
                      develop ideas that solve our clients’ most complex and pressing data
                      challenges. Below are just a few of the ways we can help you:
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={pic2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={pic3} alt="Third slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurServices;
