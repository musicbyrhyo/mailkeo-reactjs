import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Account } from './pages/Account';
import { Audience } from './pages/Audience';
import { Audiences } from './pages/Audiences';
import { Campaign } from './pages/Campaign';
import { Campaigns } from './pages/Campaigns';
import { Configure } from './pages/Configure';
import { Home } from './pages/Home';
import { JoinList } from './pages/JoinList';
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
        <Route exact path="/audiences" render={(props)=>(<Audiences/>)} />
        <Route exact path="/account" render={(props)=>(<Account/>)} />
        <Route exact path="/overview" render={(props)=>(<Overview/>)} />
        <Route exact path="/join/:username/:list" render={(props)=>(<JoinList/>)} />
        <Route exact path="/configure" render={(props)=>(<Configure/>)} />
        <Route exact path="/campaign/:id" render={(props)=>(<Campaign/>)} />
        <Route exact path="/audience/:id" render={(props)=>(<Audience />)} />
      </Router>
    </>
  );
}

export default Routing;
