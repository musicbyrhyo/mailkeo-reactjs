import { BrowserRouter as Router, Route} from 'react-router-dom'
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
      </Router>
    </>
  );
}

export default Routing;
