import { Container, Grid } from '@mui/material';
import React from 'react';
import './styles/WeatherCard.css';
import CityData from './card components/CityData';
import CardDetails from './card components/CardDetails';
import CardForecast from './card components/CardForecast';
import { useSelector } from 'react-redux';

function WeatherCard() {

    const apiData = useSelector(state => state.weatherArr.apiData);

    return (
        <Container>
            <Grid container direction="column" justifyContent="center">
                <Grid className='cardContainer'>
                    <Grid item className='Card'>
                        <Container sx={{ p: '50px' }}>
                            <Grid container justifyContent="space-between" direction='row' alignItems="center">
                                <CityData apiData={apiData} />
                                <CardDetails current={apiData.current} />
                                <CardForecast daily={apiData.daily} />
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
};

export default WeatherCard;
