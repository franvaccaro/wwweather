/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/prefer-default-export
export const handleSearch = (props) => (dispatch) => {
  if (props) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=5&appid=101c2615b3959ce818ab88818bcc4b45`)
      .then((res) => res.json())
      .then((result) => {
        result.length >= 1
          ? dispatch({
            type: 'GET_RESULTS',
            payload: {
              results: result,
            },
          }) && dispatch({
            type: 'SET_DIALOG',
            payload: {
              openDialog: true,
            },
          })
          : dispatch({
            type: 'SET_ERROR',
            payload: {
              notFound: true,
            },
          });
      });
  }
};
