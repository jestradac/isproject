import React from 'react';
import 'firebaseui/dist/firebaseui.css';
import fire from '../config/fire';

class Login extends React.Component {

    
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


  /*  signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Successfully Signed Up');
            })
            .catch((err) => {
                console.log('Error: ' + err.toString());
            })

            this.props.history.push('Register')
    }*/

    render() {
        return (
            <div style={{ margin : '10pxl' }}>
                <div style ={{margin:'10px'}}>
                    <div>Correo Electrónico: </div>
                    <input id="email" placeholder="Ingrese su correo electrónico" type="text" />
                </div>
                <div style={{margin:'10px'}}>
                    <div>Password</div>
                    <input id="password" placeholder="Ingrese su contraseña" type="password" />
                </div>
                <button style ={{margin:'5px'}}  onClick={this.login}>Login</button>

                <div>
                   <div style ={{margin:'10px'}}>
                   <a style={{ margin: '10px' }} href="Register">Registrarse</a><br/>
                   <a style={{ margin: '10px' }} href="RecoverPassword" name="OlvideContrasena">
                        olviste tu contraseña?
                    </a>
                   </div>
                </div>
            </div >
        )
    }
}
export default Login;