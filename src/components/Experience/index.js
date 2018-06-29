import React from 'react';

import { Card } from 'react-materialize';
import Generic from '../Generic';

const Experience = (props) => (
  <Card>
    <Generic
      title={props.title}
      company={props.company}
      description={props.description}
      avatar={props.avatar}
    />
  </Card>
);

export default Experience;