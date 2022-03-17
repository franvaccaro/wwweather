import React from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import sunny from '../assets/Sunny_ColorOn.svg'

function CityData(props) {
    const timeStamp = Date.now();
    const date = new Date(timeStamp).toLocaleDateString("en-GB", { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })
    const time = new Date(timeStamp).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', seconds: '2-digit', })

    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h5' className='cityTitle'>Buenos Aires, Argentina</Typography>
            <Grid className='dayInfo' sx={{ mt: '5px' }}>
                {time} • {date}
            </Grid>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                <Grid item className='temperature'>
                    {Math.round(props.apiData.current.temp)}°
                </Grid>
                <Grid item xs={5}>
                    <img src={sunny} title='Sunny' className='main-icon' alt='weather-icon'></img>
                    <Typography className='main-weather-info'>
                        {props.apiData.current.weather[0].main}
                    </Typography>
                    <Typography className='main-weather-info'>
                        H: {Math.round(props.apiData.daily[0].temp.max)}° • L: {Math.round(props.apiData.daily[0].temp.min)}°
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CityData;