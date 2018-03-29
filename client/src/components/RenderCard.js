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
				<article key={index} className="bg-white mw6 mv4 w-49 pa3 mr2 center green br4 shadow-5">
					<img src={item.image} className="w5 h4 db cover" alt={item.topic} />
					<div className="pa3">
						<a href="/" onClick={this.onOpenModal} className="link dim lh-title">
							{item.topic}
							<small className="gray db pv2">Check Details</small>
						</a>
					</div>
					<Modal className="modal" open={this.state.open} onClose={this.onCloseModal} showCloseIcon>
						<form onSubmit={this.handleSubmit} className="green">
							<Select
								required
								name="option"
								value={this.state.selectedOption}
								onChange={this.handleChange}
								options={item.values}
							/>
							<button
								className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-green"
								type="submit"
							>
								Submit
							</button>
						</form>
					</Modal>
				</article>
			);
		});
	}
}

export default RenderCard;
