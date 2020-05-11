import React from 'react';
import 'firebaseui/dist/firebaseui.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

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
            console.log('error')
            return;
        }
        this.setState({
            message: 'Registrado Correctamente'

        })
        console.log('ok');
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
            <Form style={{width:'35%', marginLeft:'auto', marginRight:'auto',  color: '#6c757d'}}>
                <div style={{ margin: '10px' }}>

                    <Form.Group style={{ margin: '10px', textAlign:'left' }}>
                        <Form.Label  htmlFor="username">Nombre de Usuario:  </Form.Label>
                        <Form.Control name="username" id="username" type="text" value={this.state.username} onChange={this.onChange.bind(this)} />
                    </Form.Group>
                    <Form.Row style={{textAlign:'left'}}> 
                        <Form.Group   as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmlFor="name" >Nombre:   </Form.Label>
                            <Form.Control name="name" id="name" type="text" value={this.state.name} onChange={this.onChange.bind(this)} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmlFor="surname">Apellido:</Form.Label>
                            <Form.Control name="surname" id="surname" type="text" value={this.state.surname} onChange={this.onChange.bind(this)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{textAlign:'left'}}>
                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="password">Contrasena:  </Form.Label>
                            <Form.Control name="password" id="password" type="password" value={this.state.password} onChange={this.onChange.bind(this)} />
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmform="confirmpassword">Confirmar Contrasena: </Form.Label>
                            <Form.Control name="confirmpassword" id="confirmpassword" type="password" value={this.state.password} onChange={this.onChange.bind(this)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row style={{textAlign:'left'}}>

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmlFor="country">Ciudad: </Form.Label>
                            <Form.Control as='select' id="country" name="country" value={this.state.country} onChange={this.onChange.bind(this)}>
                                <option value="">Seleccione una Ciudad</option>
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
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} style={{ margin: '10px' }}>
                            <Form.Label htmlFor="phone">Telefono: </Form.Label>
                            <Form.Control name="phone" id="phone" type="text" value={this.state.phone} onChange={this.onChange.bind(this)} />
                        </Form.Group>
                    </Form.Row>


                    <Form.Group style={{ marginLeft: '10px', textAlign:'left' }}>
                        <Form.Label htmlFor="typeuser">Tipo de Usuario: </Form.Label>
                        {['radio'].map((type) => (
                            <div key={type} style={{textAlign:'left'}} className="mb-3">
                                <Form.Check type={type} id='typeUser' style={{ display: 'flex' }}>

                                    <Form.Group style={{ marginTop: '15px', width:'50%'}}>
                                        <Form.Check.Input type="radio" name="typeuser" value="d" onChange={this.onChange.bind(this)} isValid />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Dador de Carga</Form.Check.Label>
                                    </Form.Group>

                                    <Form.Group style={{ marginTop: '15px', width:'50%' }}>
                                        <Form.Check.Input type="radio" name="typeuser" value="t" onChange={this.onChange.bind(this)} isValid />
                                        <Form.Check.Label style={{ color: '#6c757d' }}>Transportista</Form.Check.Label>
                                    </Form.Group>

                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group style={{ margin: '10px', textAlign:'left' }}>
                        <Form.Label htmlFor="email">Correo Electronico: </Form.Label>
                        <Form.Control name="email" id="email" type="text" value={this.state.email} onChange={this.onChange.bind(this)} />
                    </Form.Group>

                    <Form.Group style={{ margin: '10px' }}>
                        {['checkbox'].map((type) => (
                            <div key={type} className="mb-3">
                                <Form.Check type='checkbox' id='acept' name="acept" value={this.state.acept} onChange={this.onChange.bind(this)}>
                                    <Form.Check.Input type={type} isValid />
                                    <Form.Check.Label style={{ color: '#6c757d' }}>Acepta terminos y condiciones</Form.Check.Label>
                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group style={{ margin: '10px', textAlign:'center' }}>
                        <Form.Row>
                            <Button style={{ margin: '10px', width: '30%', marginLeft: '30%' }} id='registrar' onClick={this.save.bind(this)}> Registrar</Button>
                            <a style={{ margin: '10px' }} href='/'>Volver</a>

                        </Form.Row>
                    </Form.Group>

                </div>
            </Form>
        )
    }


}

export default Register