import React from'react';
import 'firebaseui/dist/firebaseui.css';
import fire from '../config/fire';

class Login extends React.Component{
    login() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log('Successfully Logged In');
        })
        .catch((err) => {
            console.log('Error: ' + err.toString());
        })
    }
    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log('Successfully Signed Up');
        })
        .catch((err) => {
            console.log('Error: ' + err.toString());
        })
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <div>Correo Electrónico</div>
                    <input id="email" placeholder="Ingrese su correo electrónico" type="text"/>
                </div>
                <div>
                    <div>Password</div>
                    <input id="password" placeholder="Ingrese su contraseña" type="password"/>
                </div>
                <button style={{margin: '10px'}} onClick={this.login}>Login</button>
                <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
          </div>
        )
    }
}
export default Login;