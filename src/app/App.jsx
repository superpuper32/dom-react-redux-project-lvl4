import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Main from '../components/Main.jsx';
import SignUp from '../components/SignUp.jsx';
import NoMatch from '../components/NoMatch.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/login">
          <SignUp />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
