import React from 'react';
import PropTypes from 'prop-types';
import FooterArticle from '../components/FooterArticle';

const FooterArticlesCont = (props) => {
  const { articles } = props;

  return (
    <div>
      { articles.map((article) => (
        <FooterArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

FooterArticlesCont.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
};

export default FooterArticlesCont;
