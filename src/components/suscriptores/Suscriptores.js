import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';

import  PropTypes  from "prop-types";

const Suscriptores = ({ suscriptores, firestore }) => {



    if (!suscriptores) return <Spinner />

  

    //Delete Suscriptores

    const deleteSuscriptor = id => {

      firestore.delete({
          collection: 'suscriptores',
          doc: id
      }).then(() => {
          console.log("Eliminado id: ", id);
      })

    }

    return (
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to="/add-suscriptores" className="btn btn-secondary">

                    <i className="fas fa-plus"></i> Nuevo Suscriptor
              </Link>
            </div>

            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users"></i> Suscriptores
              </h2>
            </div>

            <table className="table table-striped mt-4">
                <thead className="bg-prymary">
                    <tr>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {suscriptores.map(suscriptor => (
                        <tr key={suscriptor.id}>
<td>{suscriptor.nombre} {suscriptor.apellido}</td>
                            <td>{suscriptor.carrera}</td>
                            <td><Link to={`suscriptores/${suscriptor.id}`} className="btn btn-primary btn-block">
                                <i className="fas fa-angle-double-right"></i> Mas Info
                              </Link>

                                <button type="buttom" className="btn btn-danger btn-block" onClick={ () => deleteSuscriptor(suscriptor.id)}>
                                    <i className="fas fa-trash-alt"></i> Eliminar
                              </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Suscriptores.propType = {
    firestore: PropTypes.object.isRequired,
    suscriptores: PropTypes.array
}

export default compose(
    firestoreConnect([{ collection: 'suscriptores' }]),
    connect((state, props) => ({
        suscriptores: state.firestore.ordered.suscriptores
    }))
)(Suscriptores);