import { logUserInAction } from '../actions/userActions';
import setColumnsAction from '../actions/columnsActions';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const userRequest = (params) => async (dispatch) => {
  const result = await fetch('http://localhost:3000/auth', {
    method: 'post',
    headers,
    body: JSON.stringify({
      params,
    }),
  })
    .then((res) => res.json());

  if (result.name) {
    dispatch(logUserInAction(result));
  }
};

const userCreate = (params) => async (dispatch) => {
  const url = 'http://localhost:3000/users';

  const result = await fetch(url, {
    method: 'post',
    headers,
    body: JSON.stringify({
      params,
    }),
  })
    .then((res) => res.json());

  if (result.name) {
    dispatch(logUserInAction(result));
  }
};

const ColumnsRequest = async (dispatch) => {
  const url = 'http://localhost:3000/columns';

  const result = await fetch(url).then((response) => response.json())
    .then((res) => res);

  dispatch(setColumnsAction(result));
};

export { userCreate, userRequest, ColumnsRequest };
