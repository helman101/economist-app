import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ColumnContainer from './ColumnContainer';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

const App = () => (
  <div>
    <div>
      <Route exact path="/" component={LogIn} />
      <Route path="/Home" component={ColumnContainer} />
      <Route path="/SignUp" component={SignUp} />
    </div>
  </div>
);

export default connect()(App);
