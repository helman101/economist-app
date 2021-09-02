import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logUserOutAction } from '../actions/userActions';

const Navbar = (props) => {
  const handleLogOut = () => {
    props.dispatch(logUserOutAction());
  };

  return (
    <nav className="navbar bg-white w-100 border">
      <div className="logo d-flex bg-danger text-white flex-column align-items-center py-2 px-2 fw-bold ms-3">
        <div>
          The
        </div>
        <div>
          Economist
        </div>
      </div>
      <div className="me-3">
        <Link to="/" className="btn btn-danger" type="button" onClick={handleLogOut}>LOG OUT</Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Navbar);
