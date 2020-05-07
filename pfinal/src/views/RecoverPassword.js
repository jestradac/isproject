import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import fire from '../config/fire';
import history from '../config/history';



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
            <div >
                <div style={{ margin: '5px' }}>
                    <div style={{ margin: '10px' }}>Escriba su correo electrónico</div>
                    <input style={{ margin: '5px' }} id="emailr" name='emailr' placeholder="Ingrese su correo electrónico" type="text" />
                </div>

                <button style={{ margin: '10px' }} onClick={this.recover}>Enviar</button>
                <a href='/'>Volver</a>
            </div>
        )
    }

}
export default RecoverPassword


