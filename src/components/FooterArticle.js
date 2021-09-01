import React from 'react';
import PropTypes from 'prop-types';

const FooterArticle = (props) => {
  const { article } = props;

  return (
    <div className={`${!article.img_url && 'border-top'} footer-article p-2`}>
      <a href={article.url}>
        { article.img_url && <div><img className="w-100" src={article.img_url} alt={article.title} /></div> }
        <h3 className="pt-3">
          {article.title}
        </h3>
      </a>
    </div>
  );
};

FooterArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    img_url: PropTypes.string,
  }).isRequired,
};

export default FooterArticle;
