import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";

const Suscriptores = () => {
    return (
       <h1>Suscriptores</h1>
    );
}

export default compose(
    firestoreConnect([{colletion: 'suscriptores'}]),
    connect((state, props) => {
        console.log(state);
        
    })
)(Suscriptores);