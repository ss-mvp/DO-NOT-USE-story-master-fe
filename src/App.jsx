import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home, Submission,  AdminStoriesPage, AdminStories, AdminPromptPage } from './pages'

function App() {
  return (
    <div className="container-sm">
      {/* <Switch>
        <Route exact path={[`/`,`/Login`]} component={ Home } />
      </Switch> */}
      {/* <Home /> */}
      {/* <Submission /> */}
      <AdminStoriesPage />
      <AdminPromptPage />
    </div>
  );
}

export default App;
