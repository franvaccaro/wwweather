import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './styles/WeatherCard.css';
import sunny from '../assets/Sunny_ColorOn.svg'
import precipitation from '../assets/Precipitacion.svg'

function WeatherCard() {
    return (
        <Grid className='cardContainer'>
            <Grid className='Card'>
                <Container sx={{ p: '35px' }}>
                    <Grid container justifyContent="space-between" direction='row' alignItems="center">
                        <Grid item alignSelf='center' sx={{ width: '336px' }}>
                            <Typography variant='h5' className='cityTitle'>Buenos Aires, Argentina</Typography>
                            <Grid className='dayInfo'>15:43 - Wednesday, 9 March 2022</Grid>
                            <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
                                <Grid item className='temperature'>26°</Grid>
                                <Grid item>
                                    <img src={sunny} className='main-icon' alt='weather-icon'></img>
                                    <Typography className='main-weather-info'>Mostly Sunny</Typography>
                                    <Typography className='main-weather-info'>H: 29° • L: 15°</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
                            <Typography variant='h6' className='details-title'>Details</Typography>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '10px' }}>
                                <Grid item xs={5.7} className='details-container'>
                                    <Typography variant='p' className='details-subtitle'>Cloudy</Typography>
                                    <br />
                                    <Typography variant='p' className='details-info'>15%</Typography>
                                </Grid>
                                <Grid item xs={5.7} className='details-container'>
                                    <Typography variant='p' className='details-subtitle'>Wind</Typography>
                                    <br />
                                    <Typography variant='p' className='details-info'>8km/h</Typography>
                                </Grid>
                                <Grid item xs={5.7} sx={{ mt: '15px' }} className='details-container'>
                                    <Typography variant='p' className='details-subtitle'>Humidity </Typography>
                                    <br />
                                    <Typography variant='p' className='details-info'>62%</Typography>
                                </Grid>
                                <Grid item xs={5.7} sx={{ mt: '15px' }} className='details-container'>
                                    <Typography variant='p' className='details-subtitle'>Precipitation</Typography>
                                    <br />
                                    <Typography variant='p' className='details-info'>1%</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
                            <Typography variant='h6' className='details-title'>Next Forecast</Typography>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '10px', textAlign: 'center' }}>
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
                    </Grid>
                </Container>
            </Grid >
        </Grid >
    )
};

export default WeatherCard;
