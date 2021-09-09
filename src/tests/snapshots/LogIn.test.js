import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import defaultState from '../../store/defaultStore';
import LogIn from '../../components/LogIn';

const mockStore = configureStore([]);

describe('LogIn', () => {
  let store;
  let component;
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultState);
    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LogIn history={history} />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render propertly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
