// eslint-disable-next-line import/prefer-default-export
export const searchWeather = (props) => (dispatch) => {
  dispatch({
    type: 'SET_LOADER',
    payload: {
      loader: false,
    },
  });
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly,alerts&units=metric&appid=101c2615b3959ce818ab88818bcc4b45`)
    .then((res) => res.json())
    .then(
      (result) => {
        dispatch({
          type: 'GET_WEATHER',
          payload: {
            apiData: result,
            cityName: `${props.name}, ${props.country}`,
          },
        });
        dispatch({
          type: 'SET_LOADER',
          payload: {
            loader: true,
          },
        });
        dispatch({
          type: 'SET_DIALOG',
          payload: {
            openDialog: false,
          },
        });
      },
    );
};
