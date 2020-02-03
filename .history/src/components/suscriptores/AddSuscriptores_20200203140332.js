import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddSuscriptores extends Component {

    state = {
        nombre: '',
        apellido: '',
        carrera: '',
        codigo: ''
    }


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
                      <div className="col-md-8 mt-5">
                      <form action="" className="form-group">
                           <label htmlFor="Nombre">Nombre</label>
                           <input type="text" name="nombre" className="form-control" placeholder="Nombre del suscriptor" required
                           onChange={this.readData}
                           value = {this.state.nombre}
                           />
                              <label htmlFor="Apellido">Apellido</label>
                           <input type="text" name="apellido" className="form-control" placeholder="Apellido del suscriptor" required
                           onChange={this.readData}
                           value = {this.state.apellido}
                           />
                       </form>
                      </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default AddSuscriptores;