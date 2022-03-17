import React from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';

function CardDetails(props) {
    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h6' className='details-title'>Details</Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '40px' }}>
                <Grid item xs={5.7} className='details-container'>
                    <Typography variant='p' className='details-subtitle'>Cloudy</Typography>
                    <br />
                    <Typography variant='p' className='details-info'>{props.current.clouds}%</Typography>
                </Grid>
                <Grid item xs={5.7} className='details-container'>
                    <Typography variant='p' className='details-subtitle'>Wind</Typography>
                    <br />
                    <Typography variant='p' className='details-info'>{Math.round(props.current.wind_speed)}km/h</Typography>
                </Grid>
                <Grid item xs={5.7} sx={{ mt: '15px' }} className='details-container'>
                    <Typography variant='p' className='details-subtitle'>Humidity </Typography>
                    <br />
                    <Typography variant='p' className='details-info'>{props.current.humidity}%</Typography>
                </Grid>
                <Grid item xs={5.7} sx={{ mt: '15px' }} className='details-container'>
                    <Typography variant='p' className='details-subtitle'>UVI</Typography>
                    <br />
                    <Typography variant='p' className='details-info'>{props.current.uvi}%</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CardDetails;