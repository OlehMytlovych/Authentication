import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

//import AuthService from './components/AuthService';
import AuthService from './services/AuthService';
const Auth = new AuthService();



class App extends React.Component {
  state = {
    logged: Auth.loggedIn(),
  };
  
  handleLogout() {
    Auth.logout();
    this.setState({ logged: Auth.loggedIn()});
    //this.props.history.replace('/login');
  }

  render() {
    return(
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{(Auth.loggedIn()) ? 'Welcome User' : 'Hi, Wanna Log In?'}</h2>
        </div>
        <p className="App-intro">
          {
            (Auth.loggedIn()) ?
                <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
              :
                <Link to='/login'>
                  <button type="button" className="form-submit" >Login</button>
                </Link>
          }
        </p>
    </div>
    )
  }
}

export default App
