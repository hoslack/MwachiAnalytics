import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/lib/react-responsive-modal.css';

import AcademicResearch from './AcademicResearch';
import DataAnalysis from './DataAnalysis';
import AnalysisTraining from './AnalysisTraining';

import pic1 from '../images/data_a.jpg';
import pic2 from '../images/bigdata.jpg';
import pic3 from '../images/Data-Analysis.jpg';

class OurServices extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };

		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onOpenModal() {
		this.setState({ open: true });
	}

	onCloseModal() {
		this.setState({ open: false });
	}

	render() {
		return (
			<div class="container">
				{/*<!-- Modal -->*/}
				<Modal open={this.state.open} onClose={this.onCloseModal} className="resp-modal" little>
					<form class="montform" id="reused_form">
						<span>Book Service</span>
						<p class="name">
							<input
								name="name"
								type="text"
								class="feedback-input"
								required
								placeholder="Name"
								id="name"
							/>
						</p>
						<p class="email">
							<input
								name="email"
								type="email"
								required
								class="feedback-input"
								id="email"
								placeholder="Email"
							/>
						</p>
						<p class="name">
							<input
								name="phone"
								type="text"
								class="feedback-input"
								required
								placeholder="Phone"
								id="phone"
							/>
						</p>
						<p class="name">
							<input
								name="query"
								type="text"
								class="feedback-input"
								required
								placeholder="How may we help you?"
								id="query"
							/>
						</p>

						<select name="referer" class="fox_dropdown foxtext">
							<option value="">How did you here about us?</option>
							<option value="" />
							<option value="Internet Search">Internet Search</option>
							<option value="Recommended by friend">Recommended by friend</option>
							<option value="Social Media">Social Media</option>
							<option value="other">other</option>
						</select>

						<select name="projet-type" class="fox_dropdown foxtext">
							<option value="">Project Type</option>
							<option value="" />
							<option value="Student">Student</option>
							<option value=" Faculty"> Faculty</option>
							<option value=" Department"> Department</option>
							<option value=" Corporation"> Corporation</option>
							<option value=" Nonprofit"> Nonprofit</option>
							<option value=" Hospital"> Hospital</option>
							<option value=" Nurse"> Nurse</option>
							<option value=" Physician"> Physician</option>
							<option value=" Other"> Other</option>
						</select>
						<p class="name">
							<input
								name="software"
								type="text"
								class="feedback-input"
								required
								placeholder="What softwares will be used?"
								id="query"
							/>
						</p>
						<p class="text">
							<textarea name="message" class="feedback-input" id="comment" placeholder="Message" />
						</p>
						<div class="submit">
							<button type="submit" class="button-blue">
								SUBMIT
							</button>
							<div class="ease" />
						</div>
					</form>
				</Modal>
				{/*end modal*/}
				<div class="row">
					<div class="col-sm-4 col-md-4">
						<div class="panel-group" id="accordion">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
											<span class="glyphicon glyphicon-th" />ACADEMIC SUPPORT
										</a>
									</h4>
								</div>
								<div id="collapseTwo" class="panel-collapse collapse">
									<div class="panel-body">
										<table class="table">
											<AcademicResearch onOpenModal={this.onOpenModal} />
										</table>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
											<span class="glyphicon glyphicon-th" />DATA ANALYSIS
										</a>
									</h4>
								</div>
								<div id="collapseThree" class="panel-collapse collapse">
									<div class="panel-body">
										<table class="table">
											<DataAnalysis onOpenModal={this.onOpenModal} />
										</table>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
											<span class="glyphicon glyphicon-th" />ANALYSIS TRAINING
										</a>
									</h4>
								</div>
								<div id="collapseFour" class="panel-collapse collapse">
									<div class="panel-body">
										<table class="table">
											<AnalysisTraining onOpenModal={this.onOpenModal} />
										</table>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
											<span class="glyphicon glyphicon-th" />ADVISING &amp; CONSULTING
										</a>
									</h4>
								</div>
								<div id="collapseFive" class="panel-collapse collapse">
									<div class="panel-body">
										<table class="table">
											<tr>
												<td>
													<button className="btn btn-primary" onClick={this.onOpenModal} href="#">
														ADVISING
													</button>
												</td>
											</tr>
											<tr>
												<td>
													<button className="btn btn-primary" onClick={this.onOpenModal} href="#">
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
					<div class="col-sm-8 col-md-8">
						<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">
								<div class="carousel-item active">
									<img class="d-block img-fluid" src={pic1} alt="First slide" />
									<div class="carousel-caption d-none d-md-block nav-bg myopacity">
										<h1>Reliable Services. Meaningful Insights.</h1>
										<p>
											At Mwachi Analytics & Consultancy, your needs come first. We tailor all our
											services to suit each client, because no two businesses are alike. Our experts
											develop ideas that solve our clients’ most complex and pressing data
											challenges. Below are just a few of the ways we can help you:
										</p>
									</div>
								</div>
								<div class="carousel-item">
									<img class="d-block img-fluid" src={pic2} alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block img-fluid" src={pic3} alt="Third slide" />
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleControls"
								role="button"
								data-slide="prev"
							>
								<span class="carousel-control-prev-icon" aria-hidden="true" />
								<span class="sr-only">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleControls"
								role="button"
								data-slide="next"
							>
								<span class="carousel-control-next-icon" aria-hidden="true" />
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default OurServices;
