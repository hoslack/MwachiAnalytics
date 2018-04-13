import React, { Component } from 'react';
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
                <form className="montform" id="reused_form">
                  <span>Book Service</span>
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      required
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="query"
                      type="text"
                      class="form-control"
                      required
                      placeholder="How may we help you?"
                      id="query"
                    />
                  </div>
                  <div className="form-group">
                    <select name="referer" className="form-control">
                      <option value="">How did you here about us?</option>
                      <option value="" />
                      <option value="Internet Search">Internet Search</option>
                      <option value="Recommended by friend">Recommended by friend</option>
                      <option value="Social Media">Social Media</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="project-type" placeholder="heeee" className="form-control">
                      <option value="">Project Type</option>
                      <option value="" />
                      <option value="Student">Student</option>
                      <option value=" Corporation"> Corporation</option>
                      <option value=" Nonprofit"> Nonprofit</option>
                      <option value=" Other"> Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      name="software"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Prefered Softwares?"
                    />
                  </div>
                  <div className="form-group">
                    <textarea name="message" className="form-control" placeholder="Message" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary pull-left">
											SUBMIT
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger pull-right"
                      data-dismiss="modal"
                    >
											Close
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
                      <AcademicResearch />
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
                      <DataAnalysis />
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
                      <AnalysisTraining />
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
