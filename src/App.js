import React from 'react';
import BottomNav from './BottomNav';
import Home from './Home';
import Profile from './Profile';
import Code from './Code';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
function App() {
  return (
      <Router>
        <div>
          <BottomNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/code" component={Code} />
        </Switch>  
        </div>  
       </Router> 
    
  );
}




export default App;
