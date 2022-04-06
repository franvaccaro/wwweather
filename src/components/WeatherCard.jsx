import { Container, Grid } from '@mui/material';
import React from 'react';
import './styles/WeatherCard.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import CityData from './card components/CityData';
import CardDetails from './card components/CardDetails';
import CardForecast from './card components/CardForecast';

function WeatherCard() {
  const isMobile = useMediaQuery('(max-width:1200px)');

  return (
    <Container className="weatherCardContainer">
      <Grid className="cardContainer">
        <Grid
          className="Card"
          container
          justifyContent={isMobile ? 'center' : 'space-between'}
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
        >
          <CityData />
          <CardDetails />
          <CardForecast />
        </Grid>
      </Grid>
    </Container>
  );
}

export default WeatherCard;
