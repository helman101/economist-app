import React from 'react';
import PropTypes from 'prop-types';

const LeftImgArticlesCont = (props) => {
  const { articles } = props

  return (
    <div>
      { articles.map((article) => {
        <LeftImgArticles article={article} />
      })}
    </div>
  );
};

LeftImgArticlesCont.PropTypes = {
  article: PropTypes.array.isRequired
}

export default LeftImgArticlesCont;