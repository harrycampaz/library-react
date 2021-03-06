import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';

import  PropTypes  from "prop-types";

const Libros = (props) => (
            <h1>Libros</h1>
    );



export default compose(
    firestoreConnect([{ collection: 'libros' }]),
    connect((state, props) => ({
        suscriptores: state.firestore.ordered.suscriptores
    }))
)(Libros);