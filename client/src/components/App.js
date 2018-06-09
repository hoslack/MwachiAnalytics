import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import Services from './OurServices';
import Orders from './Orders';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Header updateUser={this.updateUser} />
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/services"
            render={props => <Services currentUser={this.state.currentUser} {...props} />}
          />
          <Route
            exact
            path="/orders"
            render={props => <Orders currentUser={this.state.currentUser} {...props} />}
          />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
