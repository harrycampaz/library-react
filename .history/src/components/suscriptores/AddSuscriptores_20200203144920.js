import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from "react-redux-firebase";

class AddSuscriptores extends Component {

    state = {
        nombre: '',
        apellido: '',
        carrera: '',
        codigo: ''
    }

    readData = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    addSuscriptor = e => {
        e.preventDefault();

        const newSuscriptor = this.state;

        console.log(this.props.firestore);
        

        
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/suscriptores'} className="btn btn-secondary">
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
                            <form onSubmit = {this.addSuscriptor}>
                                <div className="form-group">
                                    <label htmlFor="Nombre">Nombre</label>
                                    <input type="text" name="nombre" className="form-control" placeholder="Nombre del suscriptor" required
                                        onChange={this.readData}
                                        value={this.state.nombre}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Apellido">Apellido</label>
                                    <input type="text" name="apellido" className="form-control" placeholder="Apellido del suscriptor" required
                                        onChange={this.readData}
                                        value={this.state.apellido}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Carrera">Carrera</label>
                                    <input type="text" name="carrera" className="form-control" placeholder="Carrera" required
                                        onChange={this.readData}
                                        value={this.state.carrera}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Codigo">Codigo</label>
                                    <input type="number" name="codigo" className="form-control" placeholder="Codigo" required
                                        onChange={this.readData}
                                        value={this.state.codigo}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Agregar Suscriptor" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default firestoreConnect()(AddSuscriptores);