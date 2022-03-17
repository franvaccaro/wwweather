import React from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import sunny from '../assets/Sunny_ColorOn.svg'

function CityData(props) {
    const timeStamp = Date.now();
    // const date = new Date(timeStamp).toLocaleDateString("spa-ES")
    const time = new Date(timeStamp).toLocaleTimeString("en-US")

    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h5' className='cityTitle'>Buenos Aires, Argentina</Typography>
            <Grid className='dayInfo' sx={{ mt: '5px' }}>{time.slice(0, 4).concat(time.slice(7))} - Wednesday, 9 March 2022</Grid>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                <Grid item className='temperature'>{Math.round(props.apiData.current.temp)}°</Grid>
                <Grid item xs={5}>
                    <img src={sunny} title='Sunny' className='main-icon' alt='weather-icon'></img>
                    <Typography className='main-weather-info'>{props.apiData.current.weather[0].main}</Typography>
                    <Typography className='main-weather-info'>
                        H: {Math.round(props.apiData.daily[0].temp.max)}° • L: {Math.round(props.apiData.daily[0].temp.min)}°
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CityData;