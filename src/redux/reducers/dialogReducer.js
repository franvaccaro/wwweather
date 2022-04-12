const initialState = { openDialog: false };

// eslint-disable-next-line default-param-last
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIALOG':
      return {
        ...state,
        openDialog: action.payload.openDialog,
      };
    default:
      return state;
  }
};

export default dialogReducer;
