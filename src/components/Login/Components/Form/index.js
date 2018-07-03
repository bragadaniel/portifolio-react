import React, {Component} from 'react';
import { Card, Row, Col, Button, Input } from 'react-materialize';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = { email: '',  password: ''};
  }
  handleOnSubmit = event => {
    event.preventDefault()
  }

  render (){
    return (
      <Col offset={`m3`} m={6} s={12}>
      {
        console.log(this.setState.email)
      }
        <Card>
          <Row>
            <form onSubmit={this.handleOnSubmit}>
              <Input
                className="input-email"
                placeholder="email@email.com" 
                type="email" 
                label="E-mail" 
                s={12}
                />
              <Input
                className="input-pass" 
                placeholder="root" 
                type="password" 
                label="Password" 
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