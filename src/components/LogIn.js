import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-router-dom';
import { toast } from 'react-toastify';
import { userRequest } from '../API/apiRequests';

const LogIn = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setUserEmail(value);
    } else {
      setUserPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail === '' || userPassword === '') {
      toast.error(`${userEmail === '' ? 'Email' : 'Password'} can't be blank `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      const params = { email: userEmail, password: userPassword };
      props.dispatch(userRequest(params, props.history.push));
    }
  };

  return (
    <div className="session d-flex justify-content-center align-items-center">
      <div className="form p-2">
        <div className="title mb-4">Log In</div>
        <form className="d-flex flex-column">
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} className="my-1 form-control" />
          <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} className="my-1 form-control" />
          <a href="/SignUp" className="mt-2 mb-3 text-center link-danger">New here? Join Us!</a>
          <button type="submit" onClick={handleSubmit} className="btn btn-danger text-white fw-bold">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(LogIn);
