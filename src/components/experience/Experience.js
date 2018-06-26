import React from 'react';

import { Card } from 'react-materialize';
import Generico from '../generico/Generico';

const Experience = (props) => (
  <Card>
    <Generico
      title={props.title}
      company={props.company}
      description={props.description}
      avatar={props.avatar}
    />
  </Card>
);

export default Experience;