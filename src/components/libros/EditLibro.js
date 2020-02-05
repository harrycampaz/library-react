import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import Spinner from '../../layout/ui/Spinner';
import PropTypes from 'prop-types';

class EditLibro extends Component {

    tituloInput = React.createRef();
    ISBNInput = React.createRef();
    editorialInput = React.createRef();
    existenciasInput = React.createRef();


    editLibro = e => {
        e.preventDefault();

        const libroActualizado = {
            titulo: this.tituloInput.current.value,
            ISBN: this.ISBNInput.current.value,
            editorial: this.editorialInput.current.value,
            existencias: this.existenciasInput.current.value,
        };
      
        console.log(libroActualizado);
        
        const {libro, firestore, history} = this.props;

        firestore.update({
            collection: 'libros',
            doc: libro.id
        }, libroActualizado).then(history.push('/'))
    }

    render() {

        const {libro} = this.props;

        if(!libro) return <Spinner/>

        return (
            <div className="row">
            <div className="col-12 mb-4">
                <Link to={'/'} className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left">

                    </i>{" "} Libros
               </Link>
            </div>
            <div className="col-12">
                <h2> <i className="fas fa-book">
                </i>{" "} Nuevo libro</h2>

                <div className="row justify-content-center">

                    <div className="col-md-8 mt-5">
                    <form onSubmit = {this.editLibro}>
                            <div className="form-group">
                                <label htmlFor="Titulo">Titulo</label>
                                <input type="text" name="titulo"
                                className="form-control"
                                placeholder="Titulo o Nombre"
                                required
                                ref={this.tituloInput}
                                defaultValue={libro.titulo}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Editorial">Editorial</label>
                                <input type="text" name="editorial"
                                className="form-control"
                                placeholder="Editorial"
                                required
                                ref={this.editorialInput}
                                defaultValue={libro.editorial}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ISBN">ISBN</label>
                                <input type="text" name="ISBN"
                                className="form-control"
                                placeholder="ISBN"
                                required
                                ref={this.ISBNInput}
                                defaultValue={libro.ISBN}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Existencias">Existencias</label>
                                <input type="number" name="existencias"
                                min= '0'
                                className="form-control"
                                placeholder="Existencias"
                                required
                                ref={this.existenciasInput}
                                defaultValue={libro.existencias}
                                />
                            </div>

                            <input type="submit" value="Actualizar Libro" className ="btn btn-success"/>
                        </form>
                    </div>


                </div>
           </div>
        </div>
        );
    }
}

EditLibro.propTypes = {

};


export default compose(
    firestoreConnect(props => [{
        collection: 'libros',
        storeAs: 'libro',
        doc: props.match.params.id
    }]), connect(({firestore: {ordered}}, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(EditLibro);