import React from 'react';
import PropTypes from 'prop-types';
import BigArticlesCont from './BigArticlesCont';
import LeftImgArticlesCont from './LeftImgArticlesCont';

const TopColumns = (props) => {
  const { columns } = props;

  return (
    <div>
      <div>
        <BigArticlesCont key={columns[0]} w={1} articles={columns[0].articles} />
      </div>
      <div className="d-flex flex-wrap">
        <BigArticlesCont key={columns[1]} articles={columns[1].articles} />
        <LeftImgArticlesCont key={columns[2]} articles={columns[2].articles} />
      </div>
      <div className="d-flex flex-wrap">
        { columns.slice(3).map((column) => {
          if (Object.keys(column.articles).length === 1) {
            return (<BigArticlesCont key={column.id} articles={column.articles} />);
          }
          return (<LeftImgArticlesCont key={column.id} articles={column.articles} />);
        }) }
      </div>
    </div>
  );
};

TopColumns.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
};

export default TopColumns;
