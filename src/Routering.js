import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Account } from './pages/Account';
import { Audience } from './pages/Audience';
import { Campaigns } from './pages/Campaigns';
import { CampaignView } from './pages/CampaignView';
import { Home } from './pages/Home';
import { LogIn } from './pages/LogIn';
import { Overview } from './pages/Overview';
import { SignUp } from './pages/SignUp';
function Routing() {
  return (
    <>
      <Router>
        <Route exact path="/" render={(props)=>(<Home />)} />
        <Route exact path="/signup" render={(props)=>(<SignUp />)} />
        <Route exact path="/login" render={(props)=>(<LogIn />)} />
        <Route exact path="/campaigns" render={(props)=>(<Campaigns/>)} />
        <Route exact path="/audience" render={(props)=>(<Audience/>)} />
        <Route exact path="/account" render={(props)=>(<Account/>)} />
        <Route exact path="/overview" render={(props)=>(<Overview/>)} />
        <Route exact path="/campaigns/:name" render={(props)=>(<CampaignView/>)} />
      </Router>
    </>
  );
}

export default Routing;
