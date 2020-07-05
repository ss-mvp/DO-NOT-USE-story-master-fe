import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { 
  Home,
  Submission,
  Leaderboard, 
  AdminStoriesPage,
  AdminPromptPage,
  WinnerAnnouncement
} from './pages'

function App() {
  return (
    <>
      {/* <Switch>
        <Route exact path={[`/`,`/Login`]} component={ Home } />
      </Switch> */}
      {/* <Home /> */}
      {/* <Submission /> */}
      <WinnerAnnouncement />
      <Submission />
      <Leaderboard />
      <AdminStoriesPage />
      <AdminPromptPage />
    </>
  );
}

export default App;
