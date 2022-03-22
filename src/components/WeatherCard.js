import { Container, Grid } from '@mui/material';
import React, { forwardRef } from 'react';
import './styles/WeatherCard.css';
import CityData from './card components/CityData';
import CardDetails from './card components/CardDetails';
import CardForecast from './card components/CardForecast';
import { useSelector } from 'react-redux';

const WeatherCard = forwardRef((props, ref) => {

    const apiData = useSelector(state => state.weatherArr.apiData);


    return (
        <Container>
            <Grid container direction="column" justifyContent="center">
                <Grid item ref={ref} {...props}>
                    <Container sx={{ p: '50px' }}>
                        <Grid container justifyContent="space-between" direction='row' alignItems="center">
                            <CityData apiData={apiData} />
                            <CardDetails current={apiData.current} />
                            <CardForecast daily={apiData.daily} />
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
})

export default WeatherCard;
