import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils';
import {
  Home,
  Submission,
  TopThreeWinnersPage,
  RangkingPage,
  WinnerAnnouncementPage,
  VideoPage,
  Activated,
  MobileDashboard,
} from './pages';
import MobileNavbar from './components/nav/MobileNavbar';
import DashboardContainer from './pages/DashboardContainer';

function App() {

  const [username, setUsername] = useState('')

  return (
    <>
      <MobileNavbar username={username} setUsername={setUsername}/>
      <Switch>
        <Route exact path={[`/`, `/signin`]} component={(props)=><Home {...props} setUsername={setUsername}/>} />
        <Route path={`/activated/:token`} component={Activated} />
        <Route path={`/dashboard`} component={(props)=><DashboardContainer {...props} username={username} setUsername={setUsername}/>} />
        <Route path={`/submission`} component={Submission} />
        <Route path={`/winners`} component={TopThreeWinnersPage} />
        <Route path={`/ranking`} component={RangkingPage} />
        <Route path={`/announcement`} component={WinnerAnnouncementPage} />
        <Route path={`/video`} component={VideoPage} />
      </Switch>
    </>
  );
}

export default App;
