import React from 'react';
import PropTypes from 'prop-types';

const LeftImgArticle = (props) => {
  const { article } = props;

  return (
    <div className="small-article p-3 d-flex justify-content-between">
      <div className={`${article.img_url ? 'w-70' : 'w-100'}`}>
        <h3>
          <a href={article.url}>
            {article.title}
          </a>
        </h3>
        <p>
          {article.description}
        </p>
      </div>

      { article.img_url && (
        <div className="w-33 h-100 position-relative">
          <img className="w-100" src={article.img_url} alt={article.title} />
        </div>
      )}
    </div>
  );
};

LeftImgArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    img_url: PropTypes.string,
  }).isRequired,
};

export default LeftImgArticle;
