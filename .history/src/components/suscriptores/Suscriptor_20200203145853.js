import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';

import  PropTypes  from "prop-types";

function Suscriptor(props) {
    return (
        <div>

            <h1>Mostrar Suscriptos</h1>
            
        </div>
    );
}

export default compose(
    firestoreConnect(props => [{
        collection: 'suscriptores',
        storeAs: 'suscriptor',
        doc: props.match.params.id
    }])
)(Suscriptor);