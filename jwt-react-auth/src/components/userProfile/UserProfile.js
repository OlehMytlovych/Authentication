import React from 'react';
import './UserProfile.css';
//import AuthService from '../AuthService';
//import withAuth from '../withAuth';
import AuthService from '../../services/AuthService';
import withAuth from '../../HOC/withAuth';

const Auth = new AuthService();

class App extends React.Component {
  
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return(
    <div className="profile">
        <div className="profile-header">
            <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="profile-logout">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
    </div>
    )
  }
}

export default withAuth(App);;