import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA8ycQgVrHztugZeDYc63dxB-zicOC-0n4",
  authDomain: "evernote-clone-49220.firebaseapp.com",
  projectId: "evernote-clone-49220",
  storageBucket: "evernote-clone-49220.appspot.com",
  messagingSenderId: "795183867965",
  appId: "1:795183867965:web:def2cf487d46492329a254",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
