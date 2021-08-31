import React from 'react';
import PropTypes from 'prop-types';

const BigArticle = (props) => {
  const { article } = props

  return (
    <div>
      <div>
        <img src={article.img_url} atl={article.title} />
      </div>
      <h3>
        <a href={article.url}>
          {article.title}
        </a>
      </h3>
      <p>
        {article.description}
      </p>
    </div>
  );
};

BigArticle.PropTypes = {
  article: PropTypes.shape({ title: PropTypes.string.isRequired, url: PropTypes.string.isRequired, description: PropTypes.string.isRequired, img_url: PropTypes.string.isRequired }).isRequired
}

export default BigArticle;