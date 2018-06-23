import React from 'react';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import NotFound from './components/404/404';

import { Container } from 'react-materialize';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/contact' component={Contact}/>>
        <Route exact={true} path='*' component={NotFound}/>
      </Switch>
    </Container>
  </main>
);

export default Main;