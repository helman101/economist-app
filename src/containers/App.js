import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ColumnContainer from './ColumnContainer';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

const App = () => (
  <div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <div>
      <Route exact path="/" component={LogIn} />
      <Route path="/Home" component={ColumnContainer} />
      <Route path="/SignUp" component={SignUp} />
    </div>
  </div>
);

export default connect()(App);
