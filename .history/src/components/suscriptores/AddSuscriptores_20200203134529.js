import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddSuscriptores extends Component {
    render() {
        return (
           <div className="row">
               <div className="col-12 mb-4">
                   <Link to ={'/suscriptores'}  className="btn btn-secondary">
                   <i className="fas fa-arrow-circle-left"></i> Suscriptores
                   </Link>
                
               </div>
           </div>
        );
    }
}

export default AddSuscriptores;