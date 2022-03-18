import React, { useEffect, useState } from 'react';
import '../styles/WeatherCard.css';
import { Grid, Stack, Typography } from '@mui/material';
import precipitation from '../../assets/Precipitacion.svg'
import sunny from '../../assets/weather-icons/icon_sunny.svg'
import partlyCloudy from '../../assets/weather-icons/icon_partlycloudy.svg'
import cloudy from '../../assets/weather-icons/icon_cloudy.svg'
import rainThunder from '../../assets/weather-icons/icon_rain_thunderstorm.svg'
import rain from '../../assets/weather-icons/icon_drizzle.svg'
import snow from '../../assets/weather-icons/icon_blizzard.svg'


function ForecastDayThree(props) {

    const weatherInfo = props.daily[3].weather[0].main;
    const weatherDescription = props.daily[3].weather[0].description;
    const [weatherIcon, setWeatherIcon] = useState('')
    const [iconTitle, setIconTitle] = useState('')

    const checkForecastIcon = () => {
        if (weatherInfo === 'Clear') {
            setWeatherIcon(sunny)
            setIconTitle('Clear Day')
        } else if (weatherDescription.includes('broken')) {
            setWeatherIcon(partlyCloudy)
            setIconTitle('Partly Cloudy')
        } else if (weatherInfo === 'Clouds' && !weatherDescription.includes('broken')) {
            setWeatherIcon(cloudy)
            setIconTitle('Cloudy')
        } else if (weatherDescription.includes('storm')) {
            setWeatherIcon(rainThunder)
            setIconTitle('Electric Storm')
        } else if (weatherInfo === 'Rain') {
            setWeatherIcon(rain)
            setIconTitle('Rain')
        } else if (weatherInfo === 'Snow') {
            setWeatherIcon(snow)
            setIconTitle('Snow')
        }
    }

    useEffect(() => {
        checkForecastIcon();
    }, []);

    return (
        <Grid item xs={2.5} className='forecast-container'>
            <Stack direction='column' spacing={0.5} justifyContent='center' alignItems='center'>
                <Typography variant='p' className='forecast-day'>{props.dayThree}</Typography>
                <Typography variant='p' className='forecast-maxTemp'>{Math.round(props.daily[3].temp.max)}°</Typography>
                <Typography variant='p' className='forecast-minTemp'>{Math.round(props.daily[3].temp.min)}°</Typography>
                <img src={weatherIcon} title={iconTitle} className='forecast-weatherIcon' alt='weather-icon'></img>
                <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
                    <img src={precipitation} title='Precipitation' className='forecast-precipitationIcon' alt='precipitation-icon'></img>
                    <Typography variant='p' className='forecast-precipitation'>
                        {props.daily[3].rain ? Math.round(props.daily[3].rain) : '0'}°
                    </Typography>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default ForecastDayThree;