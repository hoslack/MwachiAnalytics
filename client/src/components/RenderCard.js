import React, { Component } from 'react';
import Modal from 'react-responsive-modal/lib/css';
import 'react-responsive-modal/lib/react-responsive-modal.css';
import data from '../service_data';

class RenderCard extends Component {
	constructor(props) {
		super(props);

		this.state = { open: false };

		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onOpenModal(e) {
		e.preventDefault();
		this.setState({ open: true });
	}

	onCloseModal() {
		this.setState({ open: false });
	}

	render() {
		return data.map((item, index) => {
			return (
				<article key={index} className="bg-white mw6 mv4 w-49 pa3 mr2 center green br4 shadow-5">
					<img src={item.image} className="w-100 db" alt={item.topic} />
					<div className="pa3">
						<a href="/" onClick={this.onOpenModal} className="link dim lh-title">
							{item.topic}
							<small className="gray db pv2">Check Details</small>
						</a>
					</div>
					<Modal className="modal" open={this.state.open} onClose={this.onCloseModal} showCloseIcon>
						<h2 className="green">Simple centered modal</h2>
						<h2>Simple centered modal</h2>
						<h2>Simple centered modal</h2>
						<h2>Simple centered modal</h2>
						<h2>Simple centered modal</h2>
						<h2>Simple centered modal</h2>
					</Modal>
				</article>
			);
		});
	}
}

export default RenderCard;
