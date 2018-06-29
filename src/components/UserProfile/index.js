import React from 'react';

import { Row, Col, Card } from 'react-materialize';

import avatar from '../../assets/img/avatar.png';

const UserProfile = (props) => (
  <Card>
    <Row>
      <Col s={8} m={8} offset='s2 m2' >
        <img src={avatar} className="cicle responsive-img" alt="User Profile"/>
      </Col>
    </Row>
    <Row className="center-align">
      <h5>Daniel Oliveira </h5>
      <p className="grey darken-2 white-text"> React Developer </p>
    </Row>
  </Card>
);

export default UserProfile;