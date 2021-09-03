import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FooterArticle from '../components/FooterArticle';

configure({ adapter: new Adapter() });

describe('FooterArticle', () => {
  it('Should render all elements with data', () => {
    const article = {
      img_url: 'https://www.economist.com/',
      url: 'https://www.economist.com/',
      priority: 1,
      title: 'Test',
      description: null,
    };

    const wrapper = shallow(
      <FooterArticle article={article} />,
    );

    expect(wrapper.find('h3').text()).toBe(article.title);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('Should not render img tag if img_url is not present', () => {
    const article = {
      img_url: null,
      url: 'https://www.economist.com/',
      priority: 1,
      title: 'Test',
      description: null,
    };

    const wrapper = shallow(
      <FooterArticle article={article} />,
    );

    expect(wrapper.find('img')).toHaveLength(0);
  });
});
