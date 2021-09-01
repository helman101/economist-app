import React from 'react';
import PropTypes from 'prop-types';

const LeftImgArticle = (props) => {
  const { article } = props;

  return (
    <div className="small-article p-3">
      <a className="d-flex justify-content-between" href={article.url}>
        <div className={`${article.img_url ? 'w-70' : 'w-100'}`}>
          <h3>
            {article.title}
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
      </a>
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
