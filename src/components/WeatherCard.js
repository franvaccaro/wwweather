import { Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './styles/WeatherCard.css';
import CityData from './card components/CityData';
import CardDetails from './card components/CardDetails';
import CardForecast from './card components/CardForecast';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';


function WeatherCard() {

    const apiData = useSelector(state => state.weatherArr.apiData);
    const cityInfo = apiData.timezone;
    const [cityLocation, setCityLocation] = useState('');

    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const locationArr = cityInfo.split('/', 3)
        setCityLocation(
            locationArr.map((item, index) => (
                locationArr[index].replace('_', ' ')
            ))
        )
    }, [cityInfo])

    return (
        <Container className='weatherCardContainer'>
            <Grid className='cardContainer'>
                <Grid className='Card' container
                    justifyContent="space-between"
                    direction={isMobile ? 'column' : 'row'}
                    alignItems="center">
                    <CityData apiData={apiData} cityLocation={cityLocation} />
                    <CardDetails current={apiData.current} />
                    <CardForecast daily={apiData.daily} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default WeatherCard;
