import React, { Component } from 'react';
import axios from 'axios';
import logo from '../images/logo.jpeg';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
      currentUser: '',
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    axios
      .get('auth/current_user')
      .then((user) => {
        this.setState({ currentUser: user.data });
      })
      .catch(err => err);
  }

  renderContent() {
    switch (this.state.currentUser) {
      case null:
        return;
      case '':
        return (
          <a className="btn btn-danger custom-button-width .navbar-right" href="/auth/google">
            Google Login
          </a>
        );
      default:
        return (
          <div className="btn-toolbar">
            <button className="btn btn-danger custom-button-width .navbar-right">
              {this.state.currentUser.email}
            </button>
            <a className="btn btn-danger custom-button-width .navbar-right" href="/auth/logout">
              Logout
            </a>
          </div>
        );
    }
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
                <a className="nav-link text-light" href="/orders">
                  ORDERS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="/about"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="https://medium.com/@hoslackochieng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </div>
          {this.renderContent()}
        </nav>
      </div>
    );
  }
}
export default Header;
