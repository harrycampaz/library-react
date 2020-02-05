import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';
import PropTypes from 'prop-types';
import FichaSuscriptor from '../suscriptores/FichaSuscriptor';

class PrestamoLibro extends Component {

    state = {
        noResult: false,
        busqueda: '',
        result: {}
    }
    readData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    seachSuscriptor = e => {
        e.preventDefault();

        const { busqueda } = this.state;
        const { firestore } = this.props;

        const collection = firestore.collection('suscriptores');

        const query = collection.where('codigo', '==', busqueda).get();


        query.then(onResponse => {

            if (onResponse.empty) {

                this.setState({
                    noResult: true,
                    result: {}
                })
            } else {
                const datos = onResponse.docs[0];
                this.setState({
                    noResult: false,
                    result: datos.data()
                })

            }

        })

    }

    solicitarPrestamo = () => {
        const {result} = this.state;
        result.fecha_solicitud = new Date().toDateString();

        const libroActualizado = this.props.libro;
        libroActualizado.prestados.push(result);

        const {firestore, history, libro} = this.props;

        firestore.update({
            collection: 'libros',
            doc: libro.id,
           
        }, libroActualizado).then(history.push('/'));
    }

    render() {

        const { libro } = this.props;

        if (!libro) return <Spinner />

        const { noResult, result } = this.state;

        let fichaAlumno, btnSolicitar;

        if (result.nombre) {
            fichaAlumno = <FichaSuscriptor alumno={result} />

            btnSolicitar = <button type="button" className="btn btn-secondary btn-block" onClick={this.solicitarPrestamo}>

                Solicitar Prestamo
            </button>
        } else {
            fichaAlumno = null;
            btnSolicitar = null;
        }

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
                    </i>{" "} Nuevo prestamos: {libro.titulo}</h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={this.seachSuscriptor} className ="mb-4">
                                
                                <legend className="col-primary text-center">
                                    Busca el suscriptor por codigo
            </legend>

                                <div className="form-group">
                                    <input type="text"
                                        placeholder="Buscar Alumno"
                                        name="busqueda" className="form-control" onChange={this.readData} />
                                </div>
                                <input type="submit" value="Buscar" className="btn btn-success btn-block" />
                            </form>

                            {fichaAlumno}
                            {btnSolicitar}

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

PrestamoLibro.propTypes = {
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
)(PrestamoLibro);