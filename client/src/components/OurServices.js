import React, { Component } from 'react';
import AcademicResearch from './AcademicResearch';
import DataAnalysis from './DataAnalysis';
import AnalysisTraining from './AnalysisTraining';

import logo from '../images/logo1.jpeg';
import pic1 from '../images/data_a.jpg';
import pic2 from '../images/bigdata.jpg';
import pic3 from '../images/Data-Analysis.jpg';

class OurServices extends Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-sm-5 col-md-5">
						<div class="panel-group" id="accordion">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
											<span class="glyphicon glyphicon-th" />ACADEMIC RESEARCH
										</a>
									</h4>
								</div>
								<div id="collapseTwo" class="panel-collapse collapse">
									<div class="panel-body">
										<table class="table">
											<AcademicResearch />
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
											<DataAnalysis />
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
											<AnalysisTraining />
										</table>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title">
										<a data-toggle="collapse" data-parent="#accordion" href="#">
											<span class="glyphicon glyphicon-th" />ADVISING &amp; CONSULTING
										</a>
									</h4>
								</div>
								<div id="collapseFour" class="panel-collapse collapse">
									<div class="panel-body">
										<table class="table">
											<tr>
												<td>
													<a href="http://www.jquery2dotnet.com">ADVISING</a>
												</td>
											</tr>
											<tr>
												<td>
													<a href="http://www.jquery2dotnet.com">CONSULTING</a>
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-7 col-md-7">
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
