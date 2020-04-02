import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyDCO0HFfaSQmNHlWPPHjzXvm-2gYYPk69E",
    authDomain: "pfinal-1e734.firebaseapp.com",
    databaseURL: "https://pfinal-1e734.firebaseio.com",
    projectId: "pfinal-1e734",
    storageBucket: "pfinal-1e734.appspot.com",
    messagingSenderId: "430281981702",
    appId: "1:430281981702:web:6071ec7714066b85622887",
    measurementId: "G-S8SWCSYQPK"
  };
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.autorization = app.auth;
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth());
    }
}

export default Firebase;