import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config/fire.js'
import Login from './views/Login.js'
import Home from './Home.js'

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
          <a>
            TRANSPORTE
          </a>
        </header>
        { this.state.user ? ( <Home /> ) : ( <Login /> ) }
        
      </div>
    );
  }
}
export default App;
