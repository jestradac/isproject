import React from 'react';
import fire from './config/fire';

class Home extends React.Component {

    logout() {
      fire.auth().signOut();
    }
  
    render() {
      return (
        <div style={{textAlign: 'center'}}>
          <h1>Bienvenido</h1>
          <button onClick = {this.logout}>Cerrar Sesión</button>
        </div>
      )
    }
  }
  
  export default Home;