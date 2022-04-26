const initialState = {};

// eslint-disable-next-line default-param-last
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADER':
      return {
        ...state,
        loader: action.payload.loader,
      };
    default:
      return state;
  }
};

export default loaderReducer;
