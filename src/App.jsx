import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils';
import {
  Home,
  Submission,
  TopThreeWinnersPage,
  RankingPage,
  WinnerAnnouncementPage,
  VideoPage,
  Activated,
} from './pages';
import MobileNavbar from './components/nav/MobileNavbar';
import DashboardContainer from './pages/DashboardContainer';

function App() {

  return (
    <>
      <MobileNavbar />
      <Switch>
        <Route exact path={[`/`, `/signin`]} component={Home} />
        <Route path={`/activated/:token`} component={Activated} />
        <Route path={`/dashboard`} component={DashboardContainer} />
        <Route path={`/submission`} component={Submission} />
        <Route path={`/winners`} component={TopThreeWinnersPage} />
        <Route path={`/ranking`} component={RankingPage} />
        <Route path={`/announcement`} component={WinnerAnnouncementPage} />
        <Route path={`/video`} component={VideoPage} />
      </Switch>
    </>
  );
}

export default App;
