const SET_COLUMNS = 'SET_COLUMNS';

const columnReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COLUMNS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default columnReducer;
