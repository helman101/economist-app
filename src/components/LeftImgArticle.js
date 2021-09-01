import React from 'react';
import PropTypes from 'prop-types';

const LeftImgArticle = (props) => {
  const { article } = props;

  return (
    <div>
      <div>
        <h3>
          <a href={article.url}>
            {article.title}
          </a>
        </h3>
        <p>
          {article.description}
        </p>
      </div>
      <div>
        { article.img_url && <img src={article.img_url} alt={article.title} /> }
      </div>
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
