import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Suscriptores from './components/suscriptores/Suscriptores';
import AddSuscriptores from './components/suscriptores/AddSuscriptores';
import EditSuscriptores from './components/suscriptores/EditSuscriptores';
import Suscriptor from './components/suscriptores/Suscriptor';
import Navbar from './layout/ui/Navbar';

import store from "./store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = {store}>
   <Router>
     <Navbar/>
     <div className="container">
     <Switch>
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
