import React from 'react';
import PropTypes from 'prop-types';
import LeftImgArticle from '../components/LeftImgArticle';

const LeftImgArticlesCont = (props) => {
  const { articles } = props;

  return (
    <div className="w-50 border-top px-3 border-dark">
      { articles.map((article) => (
        <LeftImgArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

LeftImgArticlesCont.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
};

export default LeftImgArticlesCont;
