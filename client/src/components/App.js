import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Services from './OurServices';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="">
					<Header />
					<Route exact path="/services" component={Services} />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
