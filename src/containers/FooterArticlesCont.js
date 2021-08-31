import React from 'react';
import PropTypes from 'prop-types';
import FooterArticle from '../components/FooterArticle';

const FooterArticlesCont = (props) => {
  const { column } = props;

  return (
    <div>
      { column.articles.map((article) => (
        <FooterArticle key={article.id} article={article} />
      )) }
    </div>
  );
};

FooterArticlesCont.propTypes = {
  column: PropTypes.instanceOf(Array).isRequired,
};

export default FooterArticlesCont;
