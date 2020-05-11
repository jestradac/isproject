import React from 'react';
import 'firebaseui/dist/firebaseui.css';
import fire from '../config/fire';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


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
            <Container style={{ marginTop: '50px' }} >
                <Form style={{ width: '35%', marginLeft: 'auto', marginRight: 'auto', color: '#6c757d' }}>
                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label>Correo Electrónico </Form.Label>
                        <Form.Control id="email" placeholder="Ingrese su correo electrónico" type="text" />
                    </Form.Group>

                    <Form.Group style={{ margin: '10px', textAlign: 'left' }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" placeholder="Ingrese su contraseña" type="password" />
                    </Form.Group>

                    <Form.Group style={{ textAlign: 'center', marginTop: '30px'}}>
                        <Button style={{ width:'130px', marginLeft:'auto', marginRight:'auto'}} onClick={this.login}>Login</Button>
                    </Form.Group>

                    <Form.Group style={{ textAlign: 'center' }}>
                        <a id='btnReg' href="Register">Registrarse</a><br />
                        <a id='btnRec' href="RecoverPassword" name="OlvideContrasena">
                            olviste tu contraseña?
                            </a>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
export default Login;