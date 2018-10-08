import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';
//Reducers
// @todo


const firebaseConfig = {
    apiKey: "AIzaSyDTn70NUScVe3t4Wrhbr-iOT_8LgU5EdoA",
    authDomain: "reactreduxproject-42b0c.firebaseapp.com",
    databaseURL: "https://reactreduxproject-42b0c.firebaseio.com",
    projectId: "reactreduxproject-42b0c",
    storageBucket: "reactreduxproject-42b0c.appspot.com",
    messagingSenderId: "836521942240"
}
//React-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
}

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
//const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

//initial state

const initialState = {};

//Craete store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__
    &&window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;