import React, { Component } from 'react';
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    readData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     loginInFirebase = e => {
         e.preventDefault()

         const {firebase} = this.props;
    
         const {email, password} = this.state;

         firebase.login({
             email,
             password
         }).then(result => {
             console.log('Iniciaste session', result);
             
         }).catch(error => {
             console.log("Error: ", error);
             
         })
         
     }
    
    render() {
        return (
           <div className="row justify-content-center">
               <div className="col-md-5">
                   <div className="card mt-5">
                   <div className="card-body">
                       <h2 className="text-center py-4">
                           <i className="fas fa-lock"></i> {' '} Iniciar sesion
                       </h2>
                       <form onSubmit={this.loginInFirebase}>
                           <div className="form-group">
                               <label htmlFor="Email">Email: </label>
                               <input type="email" name="email" className="form-control"
                               required
                               placeholder="correo@example.com"
                               value={this.state.email}
                               onChange={this.readData}
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="Password">Password: </label>
                               <input type="password" name="password" className="form-control"
                               required
                               value={this.state.password}
                               onChange={this.readData}
                               />
                           </div>

                           <input type="submit" value="Iniciar" className="btn btn-success btn-block"/>
                       </form>
                   </div>
                   </div>
               </div>
           </div>
        );
    }
}

Login.propTypes = {
    firebase : PropTypes.object.isRequired,
};

export default firebaseConnect()(Login);