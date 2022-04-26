const initialState = { error: false };

// eslint-disable-next-line default-param-last
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.notFound,
      };
    default:
      return state;
  }
};

export default errorReducer;
