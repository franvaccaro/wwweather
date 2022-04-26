const initialState = { openDialog: false, openCredits: false };

// eslint-disable-next-line default-param-last
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIALOG':
      return {
        ...state,
        openDialog: action.payload.openDialog,
      };
    case 'SET_CREDITS':
      return {
        ...state,
        openCredits: action.payload.credits,
      };
    default:
      return state;
  }
};

export default dialogReducer;
