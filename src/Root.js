import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-materialize';

import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/404';

const Root = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} /> 
        <Route path='/contact' component={Contact} />
        <Route exact={true} path='*' component={NotFound}/>
      </Switch>
    </Container>
  </main>
);

export default Root;