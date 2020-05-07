import React from 'react';
import 'firebaseui/dist/firebaseui.css';

class Register extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            username: '',
            name: '',
            surname: '',
            password: '',
            email: '',
            phone: '',
            country: '',
            message: ''
        }
    }

    onChange(e) {
        if (e.target.name === 'acept') {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                [e.target.password]: e.target.value,
                [e.target.email]: e.target.value,
                [e.target.phone]: e.target.value

            })
        }
    }

    save(e) {

        if (!this.validate()) {
            return;
        }
        this.setState({
            message: 'Registrado Correctamente'
        })
    }

    validate() {
        if (this.state.acept !== true) {
            this.setState({
                message: 'Complete los datos faltantes'
            })
            return false
        }
        return true
    }

    render() {
        return (
            <div style={{ textAlign: "center", margin: '10px' }}>

                <div style={{ margin: '10px' }}>
                    <label htmlFor="username">Nombre de Usuario:  </label>
                    <input name="username" id="username" type="text" value={this.state.username} onChange={this.onChange.bind(this)} />
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmlFor="name" >Nombre:   </label>
                    <input name="name" id="name" type="text" value={this.state.name} onChange={this.onChange.bind(this)} />
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmlFor="surname">Apellido:   </label>
                    <input name="surname" id="surname" type="text" value={this.state.surname} onChange={this.onChange.bind(this)} />
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmform="password">Contrasena:  </label>
                    <input name="password" id="password" type="password" value={this.state.password} onChange={this.onChange.bind(this)} />
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmform="confirmpassword">Confirmar Contrasena: </label>
                    <input name="confirmpassword" id="confirmpassword" type="password" value={this.state.password} onChange={this.onChange.bind(this)} />

                </div>

                <div style={{ margin: '10px' }}>
                    <label htmlFor="country">Ciudad: </label>
                    <select id="country" name="country" value={this.state.country} onChange={this.onChange.bind(this)}>
                        <option value="">Seleccione un valor</option>
                        <option value="">Santa Cruz</option>
                        <option value="">La Paz</option>
                        <option value="">El Alto</option>
                        <option value="">Cochabamba</option>
                        <option value="">Tarija</option>
                        <option value="">Potosi</option>
                        <option value="">Chuquisaca</option>
                        <option value="">Oruro</option>
                        <option value="">Beni</option>
                        <option value="">Pando</option>
                    </select>
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmlFor="phone">Telefono: </label>
                    <input name="phone" id="phone" type="text" value={this.state.phone} onChange={this.onChange.bind(this)} />
                </div>


                <div style={{ margin: '10px' }}>
                    <label htmlFor="typeuser">Tipo de Usuario: </label>
                    <input type="radio" name="typeuser" value="d" onChange={this.onChange.bind(this)} /> Dador de Carga
                <input type="radio" name="typeuser" value="t" onChange={this.onChange.bind(this)} /> Transportista
                </div>

                <div style={{ margin: '10px' }}>
                    <label htmlFor="email">Correo Electronico: </label>
                    <input name="email" id="email" type="text" value={this.state.email} onChange={this.onChange.bind(this)} />
                </div>

                <div style={{ margin: '5px' }}>
                    <input id="acept" type="checkbox" name="acept" value={this.state.acept} onChange={this.onChange.bind(this)} /> Acepta terminos y condiciones
                </div>

                <div style={{margin:'10px'}}>
                    <button onClick={this.save.bind(this)}> Registrar</button>
                </div>

                <a href='/'>Volver</a>
            </div>
        )
    }


}

export default Register