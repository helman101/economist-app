import React from 'react';
import PropTypes from 'prop-types';

const FooterArticle = (props) => {
  const { article } = props;

  return (
    <div>
      { article.img_url && <div><img src={article.img_url} alt={article.title} /></div> }
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

FooterArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default FooterArticle;
