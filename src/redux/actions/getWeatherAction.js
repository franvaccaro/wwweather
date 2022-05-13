// eslint-disable-next-line import/prefer-default-export
export const getWeather = () => (dispatch) => {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.7127&lon=-74.006&exclude=minutely,hourly,alerts&units=metric&appid=101c2615b3959ce818ab88818bcc4b45')
    .then((res) => res.json())
    .then(
      (result) => {
        dispatch({
          type: 'GET_WEATHER',
          payload: {
            apiData: result,
          },
        }); dispatch({
          type: 'SET_LOADER',
          payload: {
            loader: true,
          },
        });
      },
    );
};
