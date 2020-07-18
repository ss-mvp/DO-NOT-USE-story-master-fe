import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './utils'
import { 
  Home,
  Submission,
  Leaderboard, 
  WinnerAnnouncement,
  CountDownPage,
  AdminPromptPage,
  AdminStoriesPage
} from './pages'

function App() {
  return (
    <>
      {/* <AdminPromptPage />
      <AdminStoriesPage /> */}
      <Switch>
        <Route exact path={[`/`,`/signin`]} component={ Home } />
        <PrivateRoute path={`/submission`} component={ Submission } />
        <PrivateRoute path={`/leaderboard`} component={ Leaderboard } />
        <PrivateRoute path={`/announcement`} component={ WinnerAnnouncement } />
      </Switch>
    </>
  );
}

export default App;
