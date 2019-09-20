import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/Login';
import UserProfile from './components/userProfile/UserProfile';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/user_profile' component={UserProfile} />
      </div>
  </Router>,
  document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'));
