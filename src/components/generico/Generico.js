import React from 'react';
import { Row, Col } from 'react-materialize';

const Generico = (props) => (
  <Row>
    <Col s={2} m={2} >
      <img src={props.avatar} className="circle responsive-img" alt='Avatar'/>
      { props.name }
    </Col>
    <Col s={10} m={10} >
      <p><b>{props.title} in <span className="grey darken-2 white-text" >{props.company}</span> </b></p>
      <p>{props.description}</p>
    </Col>
  </Row>
);

export default Generico;