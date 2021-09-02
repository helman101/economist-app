import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userCreate } from '../API/apiRequests';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPConfirm, setUserPConfirm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name': {
        setUserName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setUserPassword(value);
        break;
      }
      default: {
        setUserPConfirm(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: userPConfirm,
    };
    props.dispatch(userCreate(params, props.history.push));
  };

  return (
    <div className="session d-flex justify-content-center align-items-center">
      <div className="form p-2">
        <div className="title mb-4">SignUp</div>
        <form className="d-flex flex-column">
          <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} className="my-1 form-control" />
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} className="my-1 form-control" />
          <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} className="my-1 form-control" />
          <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" onChange={handleChange} className="my-1 form-control" />
          <Link to="/" className="mt-2 mb-3 text-center link-danger">Have an account? Log in!</Link>
          <button type="submit" onClick={handleSubmit} className="btn btn-danger text-white fw-bold">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(SignUp);
