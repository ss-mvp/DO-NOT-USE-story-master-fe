import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home, Submission, Admin } from './pages'


function App() {
  return (
    <div className="container-sm">
      {/* <Switch>
        <Route exact path={[`/`,`/Login`]} component={ Home } />
      </Switch> */}
      {/* <Home /> */}
      {/* <Submission /> */}
      <Admin />
    </div>
  );
}

export default App;
