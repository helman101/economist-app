import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopColumns from './TopColumns';
import FooterColumns from './FooterColumns';
import Navbar from '../components/Navbar';

const ColumnContainer = (props) => {
  const { columns, user } = props;

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      props.history.push('/');
      toast.error('Access denied, please Log in', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  });

  return (
    <div className="container">
      <Navbar />
      {columns.length > 0 && <TopColumns columns={columns.slice(0, 9)} />}
      {columns.length > 0 && <FooterColumns columns={columns.slice(9)} />}
    </div>
  );
};

ColumnContainer.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({
  columns: state.columns,
  user: state.user,
});

export default connect(mapStateToProps)(ColumnContainer);
