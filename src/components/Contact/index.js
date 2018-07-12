import React, {Component} from 'react';

import { Row, Col, Card, Input, Button } from 'react-materialize';

import UserProfile from '../UserProfile';

class Contact extends Component{
  state = {email: '', message: ''}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    const {
      email,
      message
    } = this.state;

    return(
      <Row>
        <Col m={3} s={12} >
          <UserProfile/>
        </Col>
        <Col m={8} s={12} >
          <h5>Contact</h5>
          <Card>
            <Row>
              <Input 
                placeholder='email@email.com' 
                type="email" 
                label="email"
                name="email"
                value={email}
                onChange={ this.handleChange }              
                s={12} 
              />
              <Input 
                placeholder='Lorem Ipsum...' 
                label="Message"
                name="message"
                value={message}
                onChange={ this.handleChange }  
                s={12} 
                />
              <Col s={12} m={12}>
                <Button waves="light" className="right blue lighten-1"> Send </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Contact;
