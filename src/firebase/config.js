import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiJVPlMVemHY_0wqZAm6k-CVyDLYZ-mcA",
    authDomain: "fir-b79e0.firebaseapp.com",
    projectId: "fir-b79e0",
    storageBucket: "fir-b79e0.appspot.com",
    messagingSenderId: "508902260066",
    appId: "1:508902260066:web:53aa13c6728d8b23bcc03b",
    measurementId: "G-V45F2ZD8NL"
  };

  
export const Firebase = firebase.initializeApp(firebaseConfig)