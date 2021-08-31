import React from 'react';
import PropTypes from 'prop-types';

const TopColumns = (props) => {
  const { columns } = props
  const topThree = columns.splice(0, 3)

  return (
    <div>
      <div>
        <BigArticlesCont articles={topThree[0].articles}/>
      </div>
      <div>
        <BigArticlesCont articles={topThree[1].articles}/>
      </div>
      <div>
        <LeftImgArticlesCont articles={topThree[2].articles} />
      </div>
      { columns.map((column) => {
        if (Object.keys(column.articles).length === 1) {
          <BigArticlesCont articles={column.articles}/>
        } else {
          <LeftImgArticlesCont articles={column.articles} />
        }
      }) }
    </div>
  );
};

TopColumns.PropTypes = {
  columns: PropTypes.array.isRequired
}

export default TopColumns;