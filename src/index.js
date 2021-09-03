import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultStore from './store/defaultStore';
import rootReducer from './reducers/rootReducer';
import { ColumnsRequest } from './API/apiRequests';
import Routes from './routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import './assets/stylesheets/index.css';

const store = createStore(rootReducer, defaultStore, applyMiddleware(thunk));

store.dispatch(ColumnsRequest);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
