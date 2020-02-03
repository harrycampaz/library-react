import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Suscriptores from './components/suscriptores/Suscriptores';
import AddSuscriptores from './components/suscriptores/AddSuscriptores';
import EditSuscriptores from './components/suscriptores/EditSuscriptores';
import Suscriptor from './components/suscriptores/Suscriptor';
import Navbar from './layout/ui/Navbar';

import Libros from "./components/libros/Libros";
import Libro from "./components/libros/Libro";
import AddLibro from "./components/libros/AddLibro";
import EditLibro from "./components/libros/EditLibro";
import PrestamoLibro from "./components/libros/PrestamoLibro";

import store from "./store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = {store}>
   <Router>
     <Navbar/>
     <div className="container">
     <Switch>

       <Route exact path ="/" component={Libros} />

       <Route exact path ="/libros/:id" component={Libro} />
       <Route exact path ="/add-libros/" component={AddLibro} />
       <Route exact path ="/libros/edit/:id" component={EditLibro} />
       <Route exact path ="/prestamo" component={PrestamoLibro} />

       <Route exact path ="/suscriptores" component={Suscriptores}/>
       <Route exact path = "/suscriptores/:id" component ={Suscriptor}/>
       <Route exact path ="/add-suscriptores" component={AddSuscriptores}/>
       <Route exact path ="/suscriptores/edit/:id" component={EditSuscriptores}/>



     </Switch>
     </div>
   </Router>
   </Provider>
  );
}

export default App;
