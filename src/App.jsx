import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './utils'
import { 
  Home,
  Submission,
  TopThreeWinnersPage,
  RangkingPage,
  WinnerAnnouncementPage,
  VideoPage,
  Activated
} from './pages'


function App() {
  return (
    <>
      <Switch>
        <Route exact path={[`/`,`/signin`]} component={ Home } />
        <Route path={`/activated/:token`} component={ Activated } />
        <Route path={`/submission`} component={ Submission } />
        <Route path={`/winners`} component={ TopThreeWinnersPage } />
        <Route path={`/ranking`} component={ RangkingPage } />
        <Route path={`/announcement`} component={ WinnerAnnouncementPage } />
        <Route path={`/video`} component={ VideoPage } />
      </Switch>
    </>
  );
}

export default App;
