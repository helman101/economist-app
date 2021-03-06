import { toast } from 'react-toastify';
import { logUserInAction } from '../actions/userActions';
import setColumnsAction from '../actions/columnsActions';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const userRequest = (params, push) => async (dispatch) => {
  const url = new URL('https://thawing-wave-53385.herokuapp.com/auth');
  url.search = new URLSearchParams(params).toString();

  const result = await fetch(url)
    .then((res) => res.json())
    .catch(() => (
      toast.error('Imposible to reach the server', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })));

  if (result.name) {
    dispatch(logUserInAction(result));
    toast.success('Log in successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    push('/Home');
    return;
  }

  if (result.errors) {
    toast.error(result.errors[0], {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
};

const userCreate = (params, push) => async () => {
  const url = 'https://thawing-wave-53385.herokuapp.com/users';

  const result = await fetch(url, {
    method: 'post',
    headers,
    body: JSON.stringify(params),
  })
    .then((res) => res.json()).catch(() => (
      toast.error('Imposible to reach the server', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })));

  if (result.name) {
    toast.success('Sign up successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    push('/');
  }

  if (result.errors) {
    toast.error(result.errors[0], {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
};

const ColumnsRequest = async (dispatch) => {
  const url = 'https://thawing-wave-53385.herokuapp.com/columns';

  const result = await fetch(url).then((response) => response.json())
    .then((res) => res);

  dispatch(setColumnsAction(result));
};

export { userCreate, userRequest, ColumnsRequest };
