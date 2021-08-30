const SET_STATE = 'SET_STATE';

const stateReducer = (state = 'UNLOADED', action) => {
  switch (action.type) {
    case SET_STATE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default stateReducer;
