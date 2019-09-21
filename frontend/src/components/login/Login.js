import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            'usuario': "",
            'senha' : ''
        };

    }

  render() {
    return (
      <div> 
            <Form className="login-container" >
                <div className="login-card" >
                    <h1>Calendario</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                    <Button onClick={this.Validade.bind(this)} variant="primary" type="button">
                        Entrar
                    </Button>
                </div>
            </Form>
      </div>
    );
  }

  Validade(){
    axios({
        method: 'post',
        url: 'http://localhost:3333/user',
        data: {
            'usuario' : this.state.usuario,
            'senha' : this.state.senha
        }
      })
      .then( (response ) => {
        console.log(response);
      })
      .catch( (error ) => {
        console.log(error);
      })
    //   this.props.history.push('calendario');
  }
}

export default Login