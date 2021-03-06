import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LeftImgArticle from '../components/LeftImgArticle';

configure({ adapter: new Adapter() });

describe('LeftImgArticle', () => {
  it('Should render all elements with data', () => {
    const article = {
      img_url: 'https://www.economist.com/',
      url: 'https://www.economist.com/',
      priority: 1,
      title: 'Test',
      description: 'Test description',
    };

    const wrapper = shallow(
      <LeftImgArticle article={article} />,
    );

    expect(wrapper.find('h3').text()).toBe(article.title);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('p').text()).toBe(article.description);
  });

  it('Should not render a img tag if img_url is not present', () => {
    const article = {
      img_url: null,
      url: 'https://www.economist.com/',
      priority: 1,
      title: 'Test',
      description: null,
    };

    const wrapper = shallow(
      <LeftImgArticle article={article} />,
    );

    expect(wrapper.find('img')).toHaveLength(0);
  });

  it('Should not render a p tag if description is not present', () => {
    const article = {
      img_url: null,
      url: 'https://www.economist.com/',
      priority: 1,
      title: 'Test',
      description: 'Test description',
    };

    const wrapper = shallow(
      <LeftImgArticle article={article} />,
    );

    expect(wrapper.find('img')).toHaveLength(0);
  });

  it('Should render the priority data if description & img_url are not present', () => {
    const article = {
      img_url: null,
      url: 'https://www.economist.com/',
      priority: 1,
      title: 'Test',
      description: null,
    };

    const wrapper = shallow(
      <LeftImgArticle article={article} />,
    );

    expect(wrapper.find('.priority').text()).toBe('1');
  });
});
