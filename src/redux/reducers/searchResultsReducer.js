const initialState = { results: [] };

// eslint-disable-next-line default-param-last
const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESULTS':
      return {
        ...state,
        results: action.payload.results,
      };
    default:
      return state;
  }
};

export default searchResults;
