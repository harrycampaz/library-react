import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';

import  PropTypes  from "prop-types";

function Suscriptor({suscriptor}) {
 
    if(!suscriptor) return <Spinner/>

    return (
        <div className="row">

           <div className="col-md-6 mb-4">
           <Link to={'/suscriptores'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Suscriptores
                   </Link>
           </div>
            
        </div>
    );
}

export default compose(
    firestoreConnect(props => [{
        collection: 'suscriptores',
        storeAs: 'suscriptor',
        doc: props.match.params.id
    }]), connect(({firestore: {ordered}}, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(Suscriptor);