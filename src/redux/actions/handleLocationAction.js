export const handleLocation = (pos) =>
    (dispatch) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;
        if (lat) {
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=101c2615b3959ce818ab88818bcc4b45`)
                .then(res => res.json())
                .then((result) => {
                    dispatch({
                        type: 'GET_LOCATION',
                        payload: {
                            city: result[0].name,
                            country: result[0].country,
                            coords: [{
                                lat: lat,
                                long: long,
                            }]
                        }
                    })
                })
        }
    }