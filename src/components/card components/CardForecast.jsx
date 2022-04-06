import React from 'react';
import '../styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import ForecastDayOne from '../forecast/ForecastDayOne';
import ForecastDayTwo from '../forecast/ForecastDayTwo';
import ForecastDayThree from '../forecast/ForecastDayThree';
import ForecastDayFour from '../forecast/ForecastDayFour';

function CardForecast() {
  return (
    <Grid item alignSelf="flex-start" sx={{ width: '336px' }}>
      <Typography variant="h6" className="details-title">Next Forecast</Typography>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: '40px', textAlign: 'center' }}>
        <ForecastDayOne />
        <ForecastDayTwo />
        <ForecastDayThree />
        <ForecastDayFour />
      </Grid>
    </Grid>
  );
}

export default CardForecast;
