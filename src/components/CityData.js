import React, { useEffect, useState } from 'react';
import './styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import sunny from '../assets/weather-icons/icon_sunny.svg'
import clearNight from '../assets/weather-icons/icon_clear.svg'
import partlyCloudy from '../assets/weather-icons/icon_partlycloudy.svg'
import partlyCloudyNight from '../assets/weather-icons/icon_partlycloudy-night.svg'
import cloudy from '../assets/weather-icons/icon_cloudy.svg'
import rain from '../assets/weather-icons/icon_drizzle.svg'
import rainThunder from '../assets/weather-icons/icon_rain_thunderstorm.svg'
import snow from '../assets/weather-icons/icon_blizzard.svg'


function CityData(props) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const getDate = () => {
        const timeStamp = Date.now();
        setDate(new Date(timeStamp).toLocaleDateString("en-GB", { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }))
        setTime(new Date(timeStamp).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', seconds: '2-digit', }))
    }

    const weatherInfo = props.apiData.current.weather[0].main;
    const weatherDescription = props.apiData.current.weather[0].description;
    const [weatherIcon, setWeatherIcon] = useState('')
    const [iconTitle, setIconTitle] = useState('')

    const checkWeatherIcon = () => {
        if (weatherInfo == 'Clear' && document.body.className == "day") {
            setWeatherIcon(sunny)
            setIconTitle('Clear Day')
        } else if (weatherInfo == 'Clear' && document.body.className == "night") {
            setWeatherIcon(clearNight)
            setIconTitle('Clear Night')
        } else if (weatherDescription.includes('broken') && document.body.className == "day") {
            setWeatherIcon(partlyCloudy)
            setIconTitle('Partly Cloudy')
        } else if (weatherDescription.includes('broken') && document.body.className == "sunset") {
            setWeatherIcon(partlyCloudy)
            setIconTitle('Partly Cloudy')
        } else if (weatherDescription.includes('broken') && document.body.className == "night") {
            setWeatherIcon(partlyCloudyNight)
            setIconTitle('Partly Cloudy')
        } else if (weatherInfo == 'Clouds' && !weatherDescription.includes('broken')) {
            setWeatherIcon(cloudy)
            setIconTitle('Cloudy')
        } else if (weatherDescription.includes('storm')) {
            setWeatherIcon(rainThunder)
            setIconTitle('Electric Storm')
        } else if (weatherInfo == 'Rain') {
            setWeatherIcon(rain)
            setIconTitle('Rain')
        } else if (weatherInfo == 'Snow') {
            setWeatherIcon(snow)
            setIconTitle('Snow')
        }
    }

    const setBackground = () => {
        let currentTime = new Date().getHours();
        if (currentTime >= 0 && currentTime < 6) {
            document.body.className = "night"
        } if (currentTime >= 6 && currentTime < 17) {
            document.body.className = "day"
        } if (currentTime >= 17 && currentTime < 20) {
            document.body.className = "sunset"
        } if (currentTime >= 20 && currentTime < 24) {
            document.body.className = "night"
        }
    }

    useEffect(() => {
        setInterval(() => {
            getDate()
            setBackground()
            checkWeatherIcon()
        }, 1000);
    }, []);

    return (
        <Grid item alignSelf='flex-start' sx={{ width: '336px' }}>
            <Typography variant='h5' className='cityTitle'>Buenos Aires, Argentina</Typography>
            <Grid className='dayInfo' sx={{ mt: '5px' }}>
                {time} • {date}
            </Grid>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                <Grid item className='temperature'>
                    {Math.round(props.apiData.current.temp)}°
                </Grid>
                <Grid item xs={5}>
                    <img src={weatherIcon} title={iconTitle} className='main-icon'></img>
                    <Typography className='main-weather-info'>
                        {weatherInfo}
                    </Typography>
                    <Typography className='main-weather-info'>
                        H: {Math.round(props.apiData.daily[0].temp.max)}° • L: {Math.round(props.apiData.daily[0].temp.min)}°
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CityData;