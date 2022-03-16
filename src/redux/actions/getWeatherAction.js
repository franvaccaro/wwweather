export const getWeather = () =>
    (dispatch) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=-34.6132&lon=-58.3772&exclude=minutely,alerts&units=metric&appid=101c2615b3959ce818ab88818bcc4b45`)
            .then(res => res.json())
            .then((result) => {
                dispatch({
                    type: 'GET_WEATHER',
                    payload: {
                        apiData: result,
                    }
                }) && dispatch({
                    type: 'SET_LOADER',
                    payload: {
                        loader: true,
                    }
                })
            },
                (error) => {
                }
            )
    }

// basic api call
// https://api.openweathermap.org/data/2.5/weather?q=buenos+aires,ar&APPID=101c2615b3959ce818ab88818bcc4b45