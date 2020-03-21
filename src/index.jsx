import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './styles/index.css';
import './styles/App.css';
import App from './App';
import Loader from './components/Loader';
import * as serviceWorker from './serviceWorker';
import './i18n'; // Internalization

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    {/* Suspense is necessary for internalization */}
    <App />
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
