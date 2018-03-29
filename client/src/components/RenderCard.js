import React, { Component } from 'react';
import Select from 'react-select';
import Modal from 'react-responsive-modal/lib/css';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import data from '../service_data';

class RenderCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			selectedOption: '',
		};

		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	onOpenModal(e) {
		e.preventDefault();
		this.setState({ open: true });
	}

	onCloseModal() {
		this.setState({ open: false });
	}

	handleChange(selectedOption) {
		this.setState({ selectedOption });
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(event);
	}

	render() {
		return data.map((item, index) => {
			return (
				<div className="row">
					<div key={index} class="card col-md-8 col-md-offset-2 col-centered ">
						<img class="card-img-top card-img" src={item.image} alt={item.topic} />
						<div class="card-body">
							<h5 class="card-title">{item.topic}</h5>
							<p class="card-text">
								Some quick example text to build on the card title and make up the bulk of the
								card's content.
							</p>
							<a href="/" onClick={this.onOpenModal} class="btn btn-primary">
								Read More...
							</a>
						</div>
					</div>
				</div>
			);
		});
	}
}

export default RenderCard;
