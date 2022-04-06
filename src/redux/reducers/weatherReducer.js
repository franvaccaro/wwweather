const initialState = { apiData: [] };

// eslint-disable-next-line default-param-last
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        apiData: action.payload.apiData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
