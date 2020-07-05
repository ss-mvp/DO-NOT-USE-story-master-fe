import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './utils'
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
