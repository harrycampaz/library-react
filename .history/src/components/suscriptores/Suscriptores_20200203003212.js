import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const Suscriptores = ({suscriptores}) => {

    

    if(!suscriptores) return <h1>Cargando ...</h1>
    console.log(suscriptores);


    return (
      <div className="row">
          <div className="col-md-12 mb-4">
              
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
                          <td>{suscriptor.nombre}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    );
}

export default compose(
    firestoreConnect([{collection: 'suscriptores'}]),
    connect((state, props) => ({
        suscriptores: state.firestore.ordered.suscriptores
    }))
)(Suscriptores);