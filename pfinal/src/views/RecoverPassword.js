import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import fire from '../config/fire';
import history from '../config/history';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class RecoverPassword extends React.Component {
    recover() {
        var emailAddress = document.querySelector('#emailr').value;
        var auth = fire.auth();

        if (emailAddress === null) {
            alert('Debe ingresar un dato valido');
            return;
        } else {
            try {
                auth.sendPasswordResetEmail(emailAddress).then(function () {
                    alert('Email Sent');
                    history.push('/')

                }).catch(function (error) {
                    alert('El campo email no debe estar vacio o debe ingresar un correo valido');
                    //      alert(error);
                });
            } catch (error) {
                // alert(error);
            }
        }
    }

    render() {
        return (
            <Form style={{width:'35%', marginLeft:'auto', marginRight:'auto',  color: '#6c757d'}}>
                <Form.Group style={{ margin: '5px' }}>
                    <Form.Label style={{ margin: '10px' }}>Escriba su correo electrónico</Form.Label>
                    <Form.Control style={{ margin: '5px' }} id="emailr" name='emailr' placeholder="Ingrese su correo electrónico" type="text" />
                </Form.Group>

                <Button style={{ margin: '10px' }} onClick={this.recover}>Enviar</Button>
                <a href='/'>Volver</a>
            </Form>
        )
    }

}
export default RecoverPassword


