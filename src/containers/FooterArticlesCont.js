import React from 'react';
import PropTypes from 'prop-types';
import TopColumns from './TopColumns';

const FooterArticlesCont = (props) => {
  const { column } = props

  return (
    <div>
      { column.articles.map((article) => {
        <FooterArticle article={article} />
      }) }
    </div>
  );
};

FooterArticlesCont.PropTypes = {
  article: PropTypes.array.isRequired
}

export default FooterArticlesCont;