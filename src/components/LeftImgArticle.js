import React from 'react';
import PropTypes from 'prop-types';

const LeftImgArticle = (props) => {
  const { article } = props;
  const {
    description,
    title,
    url,
    priority,
  } = article;

  return (
    <div className="small-article p-3">
      <a className="d-flex justify-content-between align-items-center" href={url}>
        { (!description && !article.img_url) && (
          <div className="priority text-danger me-4">
            {priority}
          </div>
        )}
        <div className={`${article.img_url ? 'w-70' : 'w-100'}`}>
          <h3>
            {title}
          </h3>
          <p>
            {description}
          </p>
        </div>

        { article.img_url && (
          <div className="w-33 h-100 position-relative">
            <img className="w-100" src={article.img_url} alt={title} />
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
    priority: PropTypes.number,
  }).isRequired,
};

export default LeftImgArticle;
