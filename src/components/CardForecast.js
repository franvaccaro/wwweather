import React from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import ForecastDayOne from './forecast/ForecastDayOne';
import ForecastDayTwo from './forecast/ForecastDayTwo';
import ForecastDayThree from './forecast/ForecastDayThree';
import ForecastDayFour from './forecast/ForecastDayFour';

function CardForecast(props) {

    const dayOne = new Date(props.daily[1].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    const dayTwo = new Date(props.daily[2].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    const dayThree = new Date(props.daily[3].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })
    const dayFour = new Date(props.daily[4].dt * 1000).toLocaleDateString("en-GB", { weekday: 'short', day: 'numeric' })

    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h6' className='details-title'>Next Forecast</Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '40px', textAlign: 'center' }}>
                <ForecastDayOne daily={props.daily} dayOne={dayOne} />
                <ForecastDayTwo daily={props.daily} dayTwo={dayTwo} />
                <ForecastDayThree daily={props.daily} dayThree={dayThree} />
                <ForecastDayFour daily={props.daily} dayFour={dayFour} />
            </Grid>
        </Grid>
    )
}

export default CardForecast;