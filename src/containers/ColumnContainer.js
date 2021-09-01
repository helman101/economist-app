import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopColumns from './TopColumns';
import FooterColumns from './FooterColumns';

const ColumnContainer = (props) => {
  const { columns } = props;

  return (
    <div>
      {columns.length > 0 && <TopColumns columns={columns.slice(0, 9)} />}
      {columns.length > 0 && <FooterColumns columns={columns.slice(10)} />}
    </div>
  );
};

ColumnContainer.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  columns: state.columns,
});

export default connect(mapStateToProps)(ColumnContainer);
