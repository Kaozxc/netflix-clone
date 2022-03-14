import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'normalize.css'
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase';


ReactDOM.render(
  <>

    <GlobalStyles />
    <App />

  </>,
  document.getElementById('root')
);
