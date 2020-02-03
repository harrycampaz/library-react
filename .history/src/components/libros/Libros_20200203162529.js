import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';

import  PropTypes  from "prop-types";

const Libros = ({libros}) => {
    
    if(!libros) return <Spinner/>
    return(

        <div className="row">
            <div className="col-12 mb-4">
                <Link to = {"/add-libro"} className="btn btn-secondary">
                    <i className="fas fa-plus"></i> {' '}
                    Libro
                </Link>
            </div>

            <div className="col-md-8"> 
                <i className="fas fa-book"> </i>  {' '}
                Libros
            </div>

            <table className="table table-striped mt-4">
                <thead className="text-light bg-primary">

                    <tr>
                        <th>Titulo</th>
                        <th>ISBN</th>
                        <th>Editorial</th>
                        <th>Existencia</th>
                        <th>Disponible</th>
                    </tr>

                </thead>
            </table>
        </div>

  

    ); }



export default compose(
    firestoreConnect([{ collection: 'libros' }]),
    connect((state, props) => ({
        libros: state.firestore.ordered.libros
    }))
)(Libros);