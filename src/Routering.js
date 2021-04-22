import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Account } from './pages/Account';
import { Audience } from './pages/Audience';
import { Campaigns } from './pages/Campaigns';
import { Home } from './pages/Home';
import { LogIn } from './pages/LogIn';
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
      </Router>
    </>
  );
}

export default Routing;
