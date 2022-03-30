export const getUserWeather = (props) =>
    (dispatch) => {
        dispatch({
            type: 'SET_LOADER',
            payload: {
                loader: false,
            }
        })
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&exclude=minutely,hourly,alerts&units=metric&appid=101c2615b3959ce818ab88818bcc4b45`)
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