import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';
import  PropTypes  from "prop-types";


class EditSuscriptores extends Component {
    state = {

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

export default compose(
    firestoreConnect(props => [{
        collection: 'suscriptores',
        storeAs: 'suscriptor',
        doc: props.match.params.id
    }]), connect(({firestore: {ordered}}, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(EditSuscriptores);