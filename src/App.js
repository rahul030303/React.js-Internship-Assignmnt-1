import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComp from './components/loginComp';
import Dashboard from './components/dashboard';
import Home from './components/home';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/" render={ props => <Home/> } />
        <Route  path="/home/login" component={LoginComp}/>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;


