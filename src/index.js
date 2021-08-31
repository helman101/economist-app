import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import defaultStore from './store/defaultStore';
import rootReducer from './reducers/rootReducer';
import { ColumnsRequest } from './API/apiRequests';
import ColumnContainer from './containers/ColumnContainer';

const store = createStore(rootReducer, defaultStore, applyMiddleware(thunk));

store.dispatch(ColumnsRequest);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColumnContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
