const initialState = true;

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === 'isVisible/change') {
    return !state;
  }

  return state;
};

export default isVisibleReducer;
