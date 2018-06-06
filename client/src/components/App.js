import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Services from './OurServices';
import Orders from './Orders';
import About from './About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
