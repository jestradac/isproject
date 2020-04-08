import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import fire from '../config/fire';




class RecoverPassword extends React.Component {

    recover() {
        const email = document.querySelector('#email').value

        fire.auth.sendPasswordResetEmail(email)
            .then((u) => {
                console.log('Se ha enviado un codigdo a tu correo lectronico');
                alert("Se ha enviado un correo a su cuenta")
            })
            .catch((err) => {
                console.log('Error: ' + err.toString());
                alert("El usuario no ha sido encontrado")
            })


    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <div>Escriba su correo electrónico</div>
                    <input id="email" placeholder="Ingrese su correo electrónico" type="text" />
                </div>

                <button style={{ margin: '10px' }} onClick={this.recover}>Enviar</button>
            </div>
        )
    }

}
export default RecoverPassword


