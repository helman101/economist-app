import React from 'react';
import PropTypes from 'prop-types';

const FooterColumns = (props) => {
  const { columns } = props

  return (
    <div>
      { columns.map((column) => {
        <FooterArticlesCont article={column} />
      }) }
    </div>
  );
};

FooterColumns.PropTypes = {
  article: PropTypes.array.isRequired
}

export default FooterColumns;