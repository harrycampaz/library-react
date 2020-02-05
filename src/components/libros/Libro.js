import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';
import PropTypes from 'prop-types';
import Libros from './Libros';


class Libro extends Component {

    state = {};
    devolverLibro = id => {
        const {firestore, libro} = this.props;

        const librosActualizado = {... this.props.libro};

        const prestados = libro.prestados.filter(element => element.codigo !== id)


        librosActualizado.prestados = prestados;

        firestore.update({
            collection: 'libros',
            doc: librosActualizado.id
        }, librosActualizado);
        
    }

    render() {

        const {libro}  = this.props;

        if (!libro) return <Spinner />

        let botonPrestamos;
    
        if (libro.existencias - libro.prestados.length > 0) {
            botonPrestamos = <Link to={`/prestamo/${libro.id}`} className="btn btn-primary">
                Solicitar prestamos
            </Link>
        } else {
            botonPrestamos = null;
        }

        
        return (
            <div className="row">
    
                <div className="col-md-6 mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Libros
                       </Link>
                </div>
                <div className="col-md-6 mb-4">
                    <Link to={`/libros/edit/${libro.id}`} className="btn btn-primary float-right">
                        <i className="fas fa-pencil-alt"></i> {' '}
                        Editar Libro
                   </Link>
                </div>
                <hr className="mx-5 w-100" />
    
                <div className="col-12">
                    <h2 className="mb-4">
                        {libro.titulo}
                    </h2>
                    <p>
                        <span className="font-weight-bold">
                            ISBN
                       </span>{' '} {libro.ISBN}
                    </p>
                    <p>
                        <span className="font-weight-bold">
                            Editorial
                       </span>{' '} {libro.editorial}
                    </p>
                    <p>
                        <span className="font-weight-bold">
                            Existencia:
                       </span>{' '} {libro.existencias}
                    </p>
    
                    <p>
                        <span className="font-weight-bold">
                            Disponibles:
                       </span>{' '} {libro.existencias - libro.prestados.length}
                    </p>
    
                    {botonPrestamos}
    
                    <h3 className="Suscriptores que tiene el libro"></h3>
                    {libro.prestados.map(prestado => (
                        <div key={prestado.codigo} className="card my-2">
    
                            <h4 className="card-header">
                                {prestado.nombre} {prestado.apellido}
                            </h4>
    
                            <div className="card-body">
                                <p>
                                    <span className="font-weight-bold">
                                        Codigo:
            </span>{' '}
                                    {prestado.codigo}
                                </p>
                                <p>
                                    <span className="font-weight-bold">
                                        Carrera:
            </span>{' '}
                                    {prestado.carrera}
                                </p>
    
                                <p>
                                    <span className="font-weight-bold">
                                        Fecha se solicitud:
            </span>{' '}
                                    {prestado.fecha_solicitud}
                                </p>
                            </div>
    
                            <div className="card-footer">
                                <button type="button" className="btn btn-primary btn-block" onClick={() => this.devolverLibro(prestado.codigo)}>
    
                                    Devolver Libro
             </button>
                            </div>
    
    
    
                        </div>
                    ))}
    
                </div>
            </div>
        );
    }
}

Libro.propTypes = {
    firestore: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(props => [{
        collection: 'libros',
        storeAs: 'libro',
        doc: props.match.params.id
    }]), connect(({ firestore: { ordered } }, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(Libro);