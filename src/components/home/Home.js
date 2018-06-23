import React from 'react';

import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/User_profile';
import Experience from '../experience/Experience';

import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile/>
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">About Me</h5>
      <Card>
        <div>
          <p><b>Lorem</b></p>
          <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, incidunt!"</p>
          <br/>
          <p><b>Ipsum</b></p>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, itaque!"</p>
        </div>
      </Card>
      <h5 className="subititle">Experiences</h5>

      <Experience
        title="React Developer"
        company="SoundCloud"
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit!"
        avatar={company_avatar} 
      />
      
      <Experience
        title="Front End Developer"
        company="Twitter"
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet c"
        avatar={company_avatar2}
      />
    </Col>
  </Row>
);

export default Home;