import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
// Note: I don't technically need these imports since they're imported 
// on ManageCoursePage.js, but for the calls to loadAuthors and loadCourses
// to work below, these must be imported first so that they're registered
// with the dispatcher, so doing so here. (it coincidentally works without
// these, but leaving these in to be clear and deterministic)
import authorStore from './stores/authorStore'; // eslint-disable-line no-unused-vars
import courseStore from './stores/courseStore'; // eslint-disable-line no-unused-vars
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

// This is used by material-ui
injectTapEventPlugin();

// Populate Flux store
loadAuthors();
loadCourses();

render(
  <MuiThemeProvider>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
