import React from 'react';
import PropTypes from 'prop-types';
import BigArticlesCont from './BigArticlesCont';
import LeftImgArticlesCont from './LeftImgArticlesCont';

const TopColumns = (props) => {
  const { columns } = props;
  const topThree = columns.splice(0, 3);

  return (
    <div>
      <div>
        <BigArticlesCont articles={topThree[0].articles} />
      </div>
      <div>
        <BigArticlesCont articles={topThree[1].articles} />
      </div>
      <div>
        <LeftImgArticlesCont articles={topThree[2].articles} />
      </div>
      { columns.map((column) => {
        if (Object.keys(column.articles).length === 1) {
          return (<BigArticlesCont key={column.id} articles={column.articles} />);
        }
        return (<LeftImgArticlesCont key={column.id} articles={column.articles} />);
      }) }
    </div>
  );
};

TopColumns.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
};

export default TopColumns;
