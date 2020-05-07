import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import fire from './config/fire.js'
import Login from './views/Login.js'
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RecoverPassword from './views/RecoverPassword';
import Register from './views/Register';
import bowserhistory from './config/history';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TRANSPORTE
          </h1>
        </header>

        <Router history={bowserhistory}>
          <div>


            <Switch >
              <Route exact path="/">
                {this.state.user ? (<Home />) : (<Login />)}
              </Route>

              <Route path="/RecoverPassword">
                {this.state.user ? (<Home />) : (<RecoverPassword />)}
              </Route>

              <Route path="/Register">
                {this.state.user ? (<Home />) : (<Register />)}
              </Route>

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
export default App;
