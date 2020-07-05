import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home, Submission,  AdminStoriesPage, AdminStories, AdminPromptPage } from './pages'

function App() {
  return (
    <div className="main-app">
      {/* <Switch>
        <Route exact path={[`/`,`/Login`]} component={ Home } />
      </Switch> */}
      {/* <Home /> */}
      {/* <Submission /> */}
      <Home />
      <AdminStoriesPage />
      <AdminPromptPage />
    </div>
  );
}

export default App;
