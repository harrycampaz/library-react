import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

import firebase from "firebase/app";

import "firebase/firestore" ;

const firebaseConfig = {
    apiKey: "AIzaSyDzPSVs71lTBKlEEe46uaOTDO_xNUC-QO4",
        authDomain: "friendlychat2-16007.firebaseapp.com",
        databaseURL: "https://friendlychat2-16007.firebaseio.com",
        projectId: "friendlychat2-16007",
        storageBucket: "friendlychat2-16007.appspot.com",
        messagingSenderId: "7642518737",
        appId: "1:7642518737:web:651b49f1e1d7c68fa061f0"
}

firebase.initializeApp(firebaseConfig);

const rrfConfig = {

    userProfile: 'users',
    useFirebaseForProfile: true
}


const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

const initialState = {};

const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;