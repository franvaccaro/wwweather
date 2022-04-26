// eslint-disable-next-line import/prefer-default-export
export const handleDialog = () => (dispatch) => {
  dispatch({
    type: 'SET_DIALOG',
    payload: {
      openDialog: false,
    },
  });
};
