import React from 'react';
import PropTypes from 'prop-types';
import FooterArticlesCont from './FooterArticlesCont';

const FooterColumns = (props) => {
  const { columns } = props;

  return (
    <div>
      { columns.map((column) => (
        <FooterArticlesCont key={column.id} articles={column.articles} />
      ))}
    </div>
  );
};

FooterColumns.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
};

export default FooterColumns;
