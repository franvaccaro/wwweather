import { Container, Grid } from '@mui/material';
import React from 'react';
import './styles/WeatherCard.css';
import CityData from './CityData';
import CardDetails from './CardDetails';
import CardForecast from './CardForecast';
import { useSelector } from 'react-redux';

function WeatherCard() {

    const apiData = useSelector(state => state.weatherArr.apiData);

    return (
        <Grid className='cardContainer'>
            <Grid className='Card'>
                <Container sx={{ p: '35px' }}>
                    <Grid container justifyContent="space-between" direction='row' alignItems="center">
                        <CityData apiData={apiData} />
                        <CardDetails current={apiData.current} />
                        <CardForecast />
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
};

export default WeatherCard;
