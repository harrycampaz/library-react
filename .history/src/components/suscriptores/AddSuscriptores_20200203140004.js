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
               <div className="col-12">
                   <h2>
                       <i className="fas fa-user-plus"></i> {' '}
                       Nuevo suscriptor
                   </h2>
                   <div className="row justify-content-center">
                       <form action="" className="form-group">
                           <label htmlFor="Nombre">Nombre</label>
                           <input type="text" name="nombre" className="form-control" placeholder="Nombre del suscriptor" required />
                       </form>
                   </div>
               </div>
           </div>
        );
    }
}

export default AddSuscriptores;