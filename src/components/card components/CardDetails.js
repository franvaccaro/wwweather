import React from 'react';
import '../styles/WeatherCard.css';
import { Grid, Stack, Typography } from '@mui/material';

function CardDetails(props) {
    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h6' className='details-title'>Details</Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '40px' }}>
                <Grid item xs={5.6}>
                    <Stack direction='column' spacing={2.5}>
                        <Grid item xs={12} className='details-container'>
                            <Stack direction='column'>
                                <Typography variant='p' className='details-subtitle'>Cloudy</Typography>
                                <Typography variant='p' className='details-info'>{props.current.clouds}%</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} className='details-container'>
                            <Stack direction='column'>
                                <Typography variant='p' className='details-subtitle'>Humidity </Typography>
                                <Typography variant='p' className='details-info'>{props.current.humidity}%</Typography>
                            </Stack>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item xs={5.6}>
                    <Stack direction='column' spacing={2.5}>
                        <Grid item xs={12} className='details-container'>
                            <Stack direction='column'>
                                <Typography variant='p' className='details-subtitle'>Wind</Typography>
                                <Typography variant='p' className='details-info'>{Math.round(props.current.wind_speed)}km/h</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} className='details-container'>
                            <Stack direction='column'>
                                <Typography variant='p' className='details-subtitle'>UVI</Typography>
                                <Typography variant='p' className='details-info'>{props.current.uvi}%</Typography>
                            </Stack>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CardDetails;