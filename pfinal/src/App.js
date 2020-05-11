import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import fire from './config/fire.js'
import Login from './views/Login.js'
import Home from './Home.js'
import {Router, Switch, Route } from 'react-router-dom'
import RecoverPassword from './views/RecoverPassword';
import Register from './views/Register';
import bowserhistory from './config/history';
import Container from 'react-bootstrap/Container'
import FormularioTienda from './views/Tiendas/FormularioTienda';

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
          <Container style={{width: '100%', padding: '0px', margin:' 0px', maxWidth:'100%'}}>
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

                  
                  <Route path="/FormularioTienda">
                    {this.state.user ? (<Login />) : (<FormularioTienda />)}
                  </Route>


                </Switch>
              </div>
            </Router>
          </Container>
        </div>

    );
  }
}
export default App;
