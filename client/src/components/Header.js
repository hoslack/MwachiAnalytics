import React, { Component } from 'react';
import logo from '../images/logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div className="bg-white">
        <div className="row">
          <img src={logo} className="img-fluid col-md-7" alt="logo" />
          <h1 className="col-md-5 pt-5 mx-auto green text-center topquote">
            <q>
              <strong>Statistical Support, Training, Analysis and Advice</strong>
            </q>
          </h1>
        </div>
        <nav className="navbar navbar-expand-lg nav-bg">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-light" href="/">
									HOME
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-light" href="/services">
									SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
									BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
									ABOUT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
