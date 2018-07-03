import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-materialize';

import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/404';

const Root = () => (
  <main>
    <Container>
      <Switch>
        <Route path='/' exact component={Login} /> 
        <Route path='/home' exact component={Home} /> 
        <Route path='/contact' exact component={Contact} />
        <Route exact={true} path='*' component={NotFound}/>
      </Switch>
    </Container>
  </main>
);

export default Root;