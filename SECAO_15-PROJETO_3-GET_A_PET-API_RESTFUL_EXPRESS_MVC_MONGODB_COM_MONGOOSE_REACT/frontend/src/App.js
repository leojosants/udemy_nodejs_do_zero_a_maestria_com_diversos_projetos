// 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//  Pages //
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/register';
import Home from './components/pages/Home';

//  Components  //
import Navibar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (

    <Router>
      <Navibar />

      <Switch>  
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/'>
          <Home />
        </Route>        
      </Switch>

      <Footer />
    </Router>

  );
};

export default App;
