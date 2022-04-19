import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCIsVO9Reaj1fiySojmXKAHw2_mCIu1B2g",
  authDomain: "react-chat-8e2e0.firebaseapp.com",
  projectId: "react-chat-8e2e0",
  storageBucket: "react-chat-8e2e0.appspot.com",
  messagingSenderId: "642188552041",
  appId: "1:642188552041:web:d473f9349dc5c5f2ef7ff8"
})

export const Context = createContext(null)

const auth = getAuth(app);
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{auth, firestore}}>
    <App />
  </Context.Provider>
);
