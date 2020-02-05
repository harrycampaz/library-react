import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';
import PropTypes from 'prop-types';
import FichaSuscriptor from '../suscriptores/FichaSuscriptor';

import { buscarUsuario } from "../../actions/buscarUsuarioActions";
class PrestamoLibro extends Component {

    state = {
        noResult: false,
        busqueda: '',
    }
    readData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    seachSuscriptor = e => {
        e.preventDefault();

        const { busqueda } = this.state;
        const { firestore, buscarUsuario } = this.props;

        const collection = firestore.collection('suscriptores');

        const query = collection.where('codigo', '==', busqueda).get();


        query.then(onResponse => {

            if (onResponse.empty) {

                buscarUsuario({})

                this.setState({
                    noResult: true,
                })
            } else {
                const datos = onResponse.docs[0];

                buscarUsuario(datos.data())
                this.setState({
                    noResult: false
                })

            }

        })

    }

    solicitarPrestamo = () => {
        const {usuario, firestore, history, libro} = this.props;
        usuario.fecha_solicitud = new Date().toDateString();

        let prestados = [];
        prestados = [...this.props.libro.prestados, usuario];

    
        const libroActualizado = {...this.props.libro};
        // libroActualizado.prestados.push(usuario);

        delete libroActualizado.prestados;

        libroActualizado.prestados = prestados;

        console.log(libroActualizado);
        


        firestore.update({
            collection: 'libros',
            doc: libro.id,
           
        }, libroActualizado).then(history.push('/'));
    }

   

    render() {

        const { libro } = this.props;

        if (!libro) return <Spinner />

        const { noResult } = this.state;
        const { usuario } = this.props;

        let fichaAlumno, btnSolicitar;

        if (usuario.nombre) {
            fichaAlumno = <FichaSuscriptor alumno={usuario} />

            btnSolicitar = <button type="button" className="btn btn-secondary btn-block" onClick={this.solicitarPrestamo}>

                Solicitar Prestamo
            </button>
        } else {
            fichaAlumno = null;
            btnSolicitar = null;
        }

        let msgResult = "";
        if(noResult){
             msgResult = <div className="alert alert-danger">No hay resultado</div>
        }else {
            msgResult = null;
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

                            {msgResult}

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
    }]), connect(({ firestore: { ordered }, usuario  }, props) => ({
        libro: ordered.libro && ordered.libro[0],
        usuario
    }), {
        buscarUsuario
    })
)(PrestamoLibro);