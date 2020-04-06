import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FilteredListFrame from './views/FilteredListFrame';

// At the time of linting style is not available yet.
// in order to spare the CI the step of running yarn build
// we ignore this check here.
// eslint-disable-next-line import/no-unresolved
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
    <Router>
      <Switch>
        <Route exact path="/filtered-list-frame">
          <FilteredListFrame />
        </Route>
        <Route path="*">
          <App />
        </Route>
      </Switch>
    </Router>
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
