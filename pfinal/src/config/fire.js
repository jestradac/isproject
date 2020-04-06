import firebase from 'firebase';

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

const fire = firebase.initializeApp(firebaseConfig);
export default fire;