import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import RegisterUser from './Register';
import Login from './Login';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
     <Router>
       <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/create" component={Create}/>
            <Route path="/blogs/:id" component={BlogDetails}/>
            <Route path="/register" component={RegisterUser}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
      </AuthProvider>
     </Router>
  );
}

export default App;
