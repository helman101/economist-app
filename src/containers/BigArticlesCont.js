import React from 'react';
import PropTypes from 'prop-types';

const BigArticlesCont = (props) => {
  const { articles } = props

  return (
    <div>
      { articles.map((article) => {
        <BigArticle article={article} />
      }) }
    </div>
  );
};

BigArticlesCont.PropTypes = {
  article: PropTypes.array.isRequired
}

export default BigArticlesCont;