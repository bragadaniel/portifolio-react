import React from 'react';

import { Row, Col, Card, Input, Button } from 'react-materialize';

import UserProfile from '../user_profile/User_profile';

const Contact = () => (
  <Row>
    <Col m={3} s={12} >
      <UserProfile/>
    </Col>
    <Col m={8} s={12} >
      <h5>Contact</h5>
      <Card>
        <Row>
          <Input placeholder='email@email.com' type="email" label="email" s={12} />
          <Input placeholder='Lorem Ipsum...' label="Message" s={12} />
          <Col s={12} m={12}>
            <Button waves="light" className="right blue lighten-1"> Send </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default Contact;
