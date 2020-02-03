import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Suscriptores from './components/suscriptores/Suscriptores';
import AddSuscriptores from './components/suscriptores/AddSuscriptores';
import EditSuscriptores from './components/suscriptores/EditSuscriptores';
import Suscriptor from './components/suscriptores/Suscriptor';
import Navbar from './layout/ui/Navbar';

function App() {
  return (
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
  );
}

export default App;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDzPSVs71lTBKlEEe46uaOTDO_xNUC-QO4",
//     authDomain: "friendlychat2-16007.firebaseapp.com",
//     databaseURL: "https://friendlychat2-16007.firebaseio.com",
//     projectId: "friendlychat2-16007",
//     storageBucket: "friendlychat2-16007.appspot.com",
//     messagingSenderId: "7642518737",
//     appId: "1:7642518737:web:651b49f1e1d7c68fa061f0"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>