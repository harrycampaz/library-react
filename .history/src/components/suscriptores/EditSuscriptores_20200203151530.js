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
        console.log(this.props.suscriptor);
        

        // const {suscriptor} = this.props;
        return (
        <h1>{'suscriptor.nombre'}</h1>
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