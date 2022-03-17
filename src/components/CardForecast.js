import React from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import sunny from '../assets/Sunny_ColorOn.svg'
import precipitation from '../assets/Precipitacion.svg'

function CardForecast() {
    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h6' className='details-title'>Next Forecast</Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '40px', textAlign: 'center' }}>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>Thu 10 </Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>29°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>15°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>1°</Typography>
                </Grid>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>Fri 11</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>29°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>15°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>10°</Typography>
                </Grid>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>Sat 12</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>29°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>15°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>81°</Typography>
                </Grid>
                <Grid item xs={2.5} className='forecast-container'>
                    <Typography variant='p' className='forecast-day'>Sun 13</Typography>
                    <br />
                    <Typography variant='p' className='forecast-maxTemp'>29°</Typography>
                    <br />
                    <Typography variant='p' className='forecast-minTemp'>15°</Typography>
                    <br />
                    <img src={sunny} className='forecast-weatherIcon' alt='weather-icon'></img>
                    <br />
                    <img src={precipitation} className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p'> </Typography>
                    <Typography variant='p' className='forecast-precipitation'>19°</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CardForecast;