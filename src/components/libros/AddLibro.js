import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { firestoreConnect } from "react-redux-firebase";


class AddLibro extends Component {

    state ={
        titulo: '',
        ISBN: '',
        editorial: '',
        existencias: '',
        prestados: []
    }

    readData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     addLibro = e => {
        e.preventDefault();

        const newLibro = this.state;

        const { firestore, history } = this.props;

        firestore.add({
            collection: 'libros'},
            newLibro
        ).then(() => history.push('/'))
        
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left">

                        </i>{" "} Libros
                   </Link>
                </div>
                <div className="col-12">
                    <h2> <i className="fas fa-book">
                    </i>{" "} Nuevo libro</h2>

                    <div className="row justify-content-center">

                        <div className="col-md-8 mt-5">
                        <form onSubmit = {this.addLibro}>
                                <div className="form-group">
                                    <label htmlFor="Titulo">Titulo</label>
                                    <input type="text" name="titulo"
                                    className="form-control"
                                    placeholder="Titulo o Nombre"
                                    required
                                    value={this.state.titulo}
                                    onChange={this.readData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Editorial">Editorial</label>
                                    <input type="text" name="editorial"
                                    className="form-control"
                                    placeholder="Editorial"
                                    required
                                    value={this.state.editorial}
                                    onChange={this.readData}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ISBN">ISBN</label>
                                    <input type="text" name="ISBN"
                                    className="form-control"
                                    placeholder="ISBN"
                                    required
                                    value={this.state.ISBN}
                                    onChange={this.readData}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Existencias">Existencias</label>
                                    <input type="number" name="existencias"
                                    min= '0'
                                    className="form-control"
                                    placeholder="Existencias"
                                    required
                                    value={this.state.existencias}
                                    onChange={this.readData}
                                    />
                                </div>

                                <input type="submit" value="Agregar Libro" className ="btn btn-success"/>
                            </form>
                        </div>


                    </div>
               </div>
            </div>
        );
    }
}

AddLibro.propTypes = {

    firestore: PropTypes.object.isRequired,

};


export default firestoreConnect()(AddLibro);