import React, { useEffect, useState } from 'react';
import '../styles/WeatherCard.css';
import { Grid, Stack, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import precipitation from '../../assets/Precipitacion.svg'
import sunny from '../../assets/weather-icons/icon_sunny.svg'
import partlyCloudy from '../../assets/weather-icons/icon_partlycloudy.svg'
import cloudy from '../../assets/weather-icons/icon_cloudy.svg'
import rainThunder from '../../assets/weather-icons/icon_rain_thunderstorm.svg'
import rain from '../../assets/weather-icons/icon_drizzle.svg'
import lightRain from '../../assets/weather-icons/icon_rain.svg'
import fog from '../../assets/weather-icons/icon_fog.svg'
import snow from '../../assets/weather-icons/icon_blizzard.svg'


function ForecastDayFour(props) {

    const weatherInfo = props.daily[4].weather[0].main;
    const weatherDescription = props.daily[4].weather[0].description;
    const [weatherIcon, setWeatherIcon] = useState('')
    const [iconTitle, setIconTitle] = useState('')

    useEffect(() => {
        const checkForecastIcon = () => {
            if (weatherInfo === 'Clear') {
                setWeatherIcon(sunny)
                setIconTitle('Clear Day')
            } else if (weatherDescription.includes('broken')) {
                setWeatherIcon(partlyCloudy)
                setIconTitle('Partly Cloudy')
            } else if (weatherDescription.includes('few')) {
                setWeatherIcon(partlyCloudy)
                setIconTitle('Partly Cloudy')
            } else if (weatherInfo === 'Clouds' && !weatherDescription.includes('broken')) {
                setWeatherIcon(cloudy)
                setIconTitle('Cloudy')
            } else if (weatherDescription.includes('storm')) {
                setWeatherIcon(rainThunder)
                setIconTitle('Electric Storm')
            } else if (weatherInfo === 'Rain' && !weatherDescription.includes('light')
                && !weatherDescription.includes('moderate')) {
                setWeatherIcon(rain)
                setIconTitle('Rain')
            } else if (weatherInfo === 'Drizzle') {
                setWeatherIcon(lightRain)
                setIconTitle('Light Rain')
            } else if (weatherDescription.includes('light rain')) {
                setWeatherIcon(lightRain)
                setIconTitle('Light Rain')
            } else if (weatherDescription.includes('moderate rain')) {
                setWeatherIcon(lightRain)
                setIconTitle('Moderate Rain')
            } else if (weatherInfo === 'Fog') {
                setWeatherIcon(fog)
                setIconTitle('Fog')
            } else if (weatherInfo === 'Mist') {
                setWeatherIcon(fog)
                setIconTitle('Fog')
            } else if (weatherInfo === 'Snow') {
                setWeatherIcon(snow)
                setIconTitle('Snow')
            }
        }
        checkForecastIcon();
    }, [weatherDescription, weatherInfo]);

    return (
        <Grid item xs={2.5} className='forecast-container'>
            <Stack direction='column' spacing={0.5} justifyContent='center' alignItems='center'>
                <Typography variant='p' className='forecast-day'>{props.dayFour}</Typography>
                <Typography variant='p' className='forecast-maxTemp'>{Math.round(props.daily[4].temp.max)}°</Typography>
                <Typography variant='p' className='forecast-minTemp'>{Math.round(props.daily[4].temp.min)}°</Typography>
                {weatherIcon ? <img src={weatherIcon} title={iconTitle} className='forecast-weatherIcon' alt='weather-icon' /> :
                    <Skeleton variant="circular"
                        animation="wave"
                        width={40}
                        height={40}
                        sx={{ mb: 1, bgcolor: 'grey.900' }} />}
                <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
                    <img src={precipitation} title='Precipitation' className='forecast-precipitationIcon' alt='precipitation-icon' />
                    <Typography variant='p' className='forecast-precipitation'>
                        {props.daily[4].rain ? Math.round(props.daily[4].rain) : '0'}%
                    </Typography>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default ForecastDayFour;