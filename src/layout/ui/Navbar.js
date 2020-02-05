
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  state = {
    isAuthenticated: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    const { auth } = nextProps;

    if (auth.uid) {
      return { isAuthenticated: true }
    } else {
      return { isAuthenticated: false }
    }

  }

  signOut = () => {

    const {firebase} = this.props;
    firebase.logout();
  }

  render() {
    const { isAuthenticated } = this.state;

    const { auth } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">

        <Link to={"/"} className="navbar-brand">Biblioteca</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {isAuthenticated ? (



          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link to={"/suscriptores"} className="nav-link">Suscriptores</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Libros</Link>
              </li>

            </ul>

          </div>
        ) : null}

        {isAuthenticated ? (

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#!" className="nav-link">
                {auth.email}
              </a>
            </li>
            <li className="nav-item">
             <button type="button" className='btn btn-danger' onClick={this.signOut}>
               Cerrar sesion
             </button>
            </li>
          </ul>

        ) : null}
      </nav>
    );
  }
}

Navbar.propTypes = {

  firebase : PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};


export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Navbar);
