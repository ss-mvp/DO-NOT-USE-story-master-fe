import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './utils'
import { 
  Home,
  Submission,
  TopThreeWinnersPage,
  RangkingPage,
  WinnerAnnouncementPage,
} from './pages'


function App() {
  return (
    <>
      <Switch>
        <Route exact path={[`/`,`/signin`]} component={ Home } />
        <Route path={`/submission`} component={ Submission } />
        <Route path={`/winners`} component={ TopThreeWinnersPage } />
        <Route path={`/ranking`} component={ RangkingPage } />
        <Route path={`/announcement`} component={ WinnerAnnouncementPage } />
      </Switch>
    </>
  );
}

export default App;
