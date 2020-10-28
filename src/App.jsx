import React, {useState} from 'react';
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
  DashboardContainer,
} from './pages';
import MobileNavbar from './components/nav/MobileNavbar';
import ToS from './components/terms_and_privacy/ToS';

function App() {

  const [username, setUsername] = useState('')

  return (
    <>
      <MobileNavbar username={username} setUsername={setUsername}/>
      <Switch>
        <Route exact path={[`/`, `/signin`]} component={(props)=><Home {...props} setUsername={setUsername}/>} />
        <Route path={`/activated/:token`} component={Activated} />
        <PrivateRoute path={`/dashboard`} component={(props)=><DashboardContainer {...props} username={username} setUsername={setUsername}/>} />
        <PrivateRoute path={`/submission`} component={Submission} />
        <PrivateRoute path={`/winners`} component={TopThreeWinnersPage} />
        <Route path={`/ranking`} component={RankingPage} />
        <Route path={`/announcement`} component={WinnerAnnouncementPage} />
        <Route path={`/video`} component={VideoPage} />
        <Route path={`/tos`} component={ToS} />
      </Switch>
    </>
  );
}

export default App;
