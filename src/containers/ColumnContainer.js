import React from 'react';
import { connect } from 'react';
import PropTypes from 'prop-types';

const ColumnContainer = (props) => {
  const { columns } = props;
  const top = columns.splice(0,10); 

  return(
    <div>
      <TopColumns columns={top} />
      <FooterColumns columns={columns} />
    </div>
  )
}

ColumnContainer.PropTypes = {
  columns: PropTypes.array.isRequired
}

export default connect()(ColumnContainer);