import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';
import  PropTypes  from "prop-types";


class EditSuscriptores extends Component {

    nombreInput = React.createRef;
    apellidoInput = React.createRef;
    carreraInput = React.createRef;
    codigoInput = React.createRef;


    editSuscriptor = e => {
        e.preventDefault();

        const suscriptorActualizado = {
            nombre: this.nombreInput.current.value,
            apellido: this.apellidoInput.current.value,
            carrera: this.carreraInput.current.value,
            codigo: this.codigoInput.current.value,
        };
        console.log(suscriptorActualizado);
        

        const {suscriptor, firestore, history} = this.props;

        firestore.update({
            collection: 'suscriptores',
            doc: suscriptor.id
        }, suscriptorActualizado).then(history.push('/suscriptores'))
    }



   
    
    render() {
     
      
        const {suscriptor} = this.props;

        if(!suscriptor) return <Spinner/>

        console.log(suscriptor);
        
        return (
            <div className="row">
            <div className="col-12 mb-4">
                <Link to={'/suscriptores'} className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left"></i> Suscriptores
               </Link>

            </div>
            <div className="col-12">
                <h2>
                    <i className="fas fa-user"></i> {' '}
                    Editar suscriptor
               </h2>
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <form onSubmit = {this.editSuscriptor}>
                            <div className="form-group">
                                <label htmlFor="Nombre">Nombre</label>
                                <input type="text" name="nombre" className="form-control" placeholder="Nombre del suscriptor" required
                                    ref={this.nombreInput}
                                    defaultValue={suscriptor.nombre}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Apellido">Apellido</label>
                                <input type="text" name="apellido" className="form-control" placeholder="Apellido del suscriptor" required
                                    ref={this.apellidoInput}
                                    defaultValue={suscriptor.apellido}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Carrera">Carrera</label>
                                <input type="text" name="carrera" className="form-control" placeholder="Carrera" required
                                    ref={this.carreraInput}
                                    defaultValue={suscriptor.carrera}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Codigo">Codigo</label>
                                <input type="number" name="codigo" className="form-control" placeholder="Codigo" required
                                   ref={this.codigo}
                                    defaultValue={suscriptor.codigo}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Editar Suscriptor" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default compose(
    firestoreConnect(props => [{
        collection: 'suscriptores',
        storeAs: 'suscriptor',
        doc: props.match.params.id
    }]), connect(({firestore: {ordered}}, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(EditSuscriptores);