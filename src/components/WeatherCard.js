import { Container, Grid } from '@mui/material';
import React, { forwardRef, useState, useEffect } from 'react';
import './styles/WeatherCard.css';
import CityData from './card components/CityData';
import CardDetails from './card components/CardDetails';
import CardForecast from './card components/CardForecast';
import { useSelector } from 'react-redux';

const WeatherCard = forwardRef((props, ref) => {

    const apiData = useSelector(state => state.weatherArr.apiData);
    const cityInfo = apiData.timezone;
    const [cityLocation, setCityLocation] = useState('');

    useEffect(() => {
        const getLocationData = () => {
            const locationArr = cityInfo.split('/', 3)
            setCityLocation(
                locationArr.map((item, index) => (
                    locationArr[index].replace('_', ' ')
                ))
            )
        }
        getLocationData()
    }, [cityInfo])

    return (
        <Container>
            <Grid container direction="column" justifyContent="center">
                <Grid item ref={ref} {...props}>
                    <Container sx={{ p: '50px' }}>
                        <Grid container justifyContent="space-between" direction='row' alignItems="center">
                            <CityData apiData={apiData} cityLocation={cityLocation} />
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
