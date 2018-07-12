import React, {Component} from 'react';
import { Card, Row, Col, Button, Input } from 'react-materialize';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = { login: '', password: '' };
  }
  handleOnSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render (){
    const {
      login,
      password
    } = this.state;
    return (
      <Col offset={`m3`} m={6} s={12}>
        <Card>
          <Row>
            <form onSubmit={this.handleOnSubmit} autoComplete="off">
              <Input
                className="input-email"
                placeholder="email@email.com" 
                type="email" 
                label="E-mail"
                name="login"
                value={login}
                autoComplete="off"
                onChange={ this.handleChange } 
                s={12}
                />
              <Input
                className="input-pass" 
                placeholder="root" 
                type="password" 
                label="Password" 
                autoComplete="off"
                name="password"
                value={password}
                onChange={ this.handleChange } 
                s={12} 
                />
              <Col s={12} m={12}>
                <Button 
                  waves="light" 
                  className="right blue lighten-1"
                > 
                  Sign in 
                </Button>
              </Col>
            </form>
          </Row>
        </Card>
      </Col>
    )
  }
}

export default Form;