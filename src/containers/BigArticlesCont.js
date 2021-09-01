import React from 'react';
import PropTypes from 'prop-types';
import BigArticle from '../components/BigArticle';

const BigArticlesCont = (props) => {
  const { articles, w } = props;

  return (
    <div className={`${w ? 'w-100' : 'w-50'} px-3 py-2 border-top border-dark`}>
      { articles.map((article) => (
        <BigArticle w={w} key={article.id} article={article} />
      )) }
    </div>
  );
};

BigArticlesCont.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
  w: PropTypes.bool.isRequired,
};

export default BigArticlesCont;
