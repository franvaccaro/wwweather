import React from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import sunny from '../assets/Sunny_ColorOn.svg'
import precipitation from '../assets/Precipitacion.svg'

function CardForecast(props) {

    const dayOne = new Date(props.daily[1].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    const dayTwo = new Date(props.daily[2].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    const dayThree = new Date(props.daily[3].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    const dayFour = new Date(props.daily[4].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    console.log(navigator.geolocation)

    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h6' className='details-title'>Next Forecast</Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '40px', textAlign: 'center' }}>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>{dayOne}</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>{Math.round(props.daily[1].temp.max)}°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>{Math.round(props.daily[1].temp.min)}°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} title='Precipitation' className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>
                        {props.daily[1].rain ? Math.round(props.daily[1].rain) : '0'}°
                    </Typography>
                </Grid>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>{dayTwo}</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>{Math.round(props.daily[2].temp.max)}°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>{Math.round(props.daily[2].temp.min)}°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} title='Precipitation' className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>
                        {props.daily[2].rain ? Math.round(props.daily[2].rain) : '0'}°
                    </Typography>
                </Grid>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>{dayThree}</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>{Math.round(props.daily[3].temp.max)}°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>{Math.round(props.daily[3].temp.min)}°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} title='Precipitation' className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>
                        {props.daily[3].rain ? Math.round(props.daily[3].rain) : '0'}°
                    </Typography>
                </Grid>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>{dayFour}</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>{Math.round(props.daily[4].temp.max)}°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>{Math.round(props.daily[4].temp.min)}°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} title='Precipitation' className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>
                        {props.daily[4].rain ? Math.round(props.daily[4].rain) : '0'}°
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CardForecast;