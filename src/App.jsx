import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './utils'
import { 
  Home,
  Submission,
  Leaderboard, 
  WinnerAnnouncement,
  CountDownPage,
} from './pages'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={[`/`,`/signin`]} component={ Home } />
        <Route path={`/submission`} component={ Submission } />
        <Route path={`/leaderboard`} component={ Leaderboard } />
        <Route path={`/announcement`} component={ WinnerAnnouncement } />
      </Switch>
    </>
  );
}

export default App;
