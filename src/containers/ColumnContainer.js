import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopColumns from './TopColumns';
import FooterColumns from './FooterColumns';

const ColumnContainer = (props) => {
  const { columns } = props;
  const top = columns.splice(0, 10);

  if (columns) {
    return (
      <div>
        <TopColumns columns={top} />
        <FooterColumns columns={columns} />
      </div>
    );
  }

  return (
    <div>
      Loading Articles Wait a Second...
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
