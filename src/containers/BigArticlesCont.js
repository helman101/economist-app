import React from 'react';
import PropTypes from 'prop-types';
import BigArticle from '../components/BigArticle';

const BigArticlesCont = (props) => {
  const { articles } = props;

  return (
    <div>
      { articles.map((article) => (
        <BigArticle key={article.id} article={article} />
      )) }
    </div>
  );
};

BigArticlesCont.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
};

export default BigArticlesCont;
