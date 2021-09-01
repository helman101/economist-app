import React from 'react';
import PropTypes from 'prop-types';

const BigArticle = (props) => {
  const { article, w } = props;

  return (
    <div className={`${w ? 'big-article' : 'small-article'} mt-3 mb-5`}>
      <div>
        { article.img_url && <img className="w-100" src={article.img_url} alt={article.title} /> }
      </div>
      <h3 className="my-3">
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

BigArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    img_url: PropTypes.string,
  }).isRequired,
  w: PropTypes.bool.isRequired,
};

export default BigArticle;
