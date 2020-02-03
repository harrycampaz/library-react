import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Suscriptores from './components/suscriptores/Suscriptores';
import AddSuscriptores from './components/suscriptores/AddSuscriptores';
import EditSuscriptores from './components/suscriptores/EditSuscriptores';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path ="/suscriptores" components={Suscriptores}/>
       <Route exact path ="/add-suscriptores" components={AddSuscriptores}/>
       <Route exact path ="/suscriptores/edit/:id" components={EditSuscriptores}/>
     </Switch>
   </Router>
  );
}

export default App;
