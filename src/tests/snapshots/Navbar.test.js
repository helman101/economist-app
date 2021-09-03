import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import defaultState from '../../store/defaultStore';
import Navbar from '../../components/Navbar';

const mockStore = configureStore([]);

describe('Navbar', () => {
  let store;
  let component;
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultState);
    component = renderer.create(
      <Provider store={store}>
        <Navbar history={history} />
      </Provider>,
    );
  });

  it('should render propertly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
