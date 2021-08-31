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

/*shape({ title: PropTypes.string.isRequired, url: PropTypes.string.isRequired, description: PropTypes.string.isRequired, img_url: PropTypes.string.isRequired }*/ 

export default BigArticlesCont;