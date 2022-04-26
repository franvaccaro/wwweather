import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import '../styles/WeatherCard.css';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import sunny from '../../assets/weather-icons/icon_sunny.svg';
import clearNight from '../../assets/weather-icons/icon_clear.svg';
import partlyCloudy from '../../assets/weather-icons/icon_partlycloudy.svg';
import partlyCloudyNight from '../../assets/weather-icons/icon_partlycloudy-night.svg';
import cloudy from '../../assets/weather-icons/icon_cloudy.svg';
import rain from '../../assets/weather-icons/icon_drizzle.svg';
import rainThunder from '../../assets/weather-icons/icon_rain_thunderstorm.svg';
import lightRain from '../../assets/weather-icons/icon_rain.svg';
import fog from '../../assets/weather-icons/icon_fog.svg';
import snow from '../../assets/weather-icons/icon_blizzard.svg';

function CityData() {
  const apiData = useSelector((state) => state.weatherArr.apiData);
  const cityName = useSelector((state) => state.weatherArr.cityName);
  const cityInfo = apiData.timezone;
  const [cityLocation, setCityLocation] = useState('');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const weatherInfo = apiData.current.weather[0].main;
  const weatherDescription = apiData.current.weather[0].description;
  const [weatherIcon, setWeatherIcon] = useState('');
  const [iconTitle, setIconTitle] = useState('');
  const interval = useRef(null);

  useEffect(() => {
    const locationArr = cityInfo.split('/', 3);
    setCityLocation(
      locationArr.map((item, index) => (
        locationArr[index].replace('_', ' ')
      )),
    );
  }, [cityInfo]);

  const updateTime = useCallback(() => {
    const timeStamp = Date.now();
    setDate(new Date(timeStamp).toLocaleDateString('en-GB', {
      weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', timeZone: cityInfo,
    }));
    setTime(new Date(timeStamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: cityInfo }));
  }, [cityInfo]);

  useEffect(() => {
    updateTime();
  }, [updateTime]);

  useEffect(() => {
    interval.current = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [updateTime]);

  useEffect(() => {
    if (time !== '') {
      const currentTime = time.slice(0, 2);
      if (currentTime >= 0 && currentTime < 6) {
        document.body.className = 'night';
      } if (currentTime >= 6 && currentTime < 12) {
        document.body.className = 'morning';
      } if (currentTime >= 12 && currentTime < 17) {
        document.body.className = 'day';
      } if (currentTime >= 17 && currentTime < 20) {
        document.body.className = 'sunset';
      } if (currentTime >= 20 && currentTime < 24) {
        document.body.className = 'night';
      }
    }
  }, [time]);

  useEffect(() => {
    if (weatherInfo === 'Clear' && document.body.className === 'morning') {
      setWeatherIcon(sunny);
      setIconTitle('Clear Morning');
    } else if (weatherInfo === 'Clear' && document.body.className === 'day') {
      setWeatherIcon(sunny);
      setIconTitle('Clear Day');
    } else if (weatherInfo === 'Clear' && document.body.className === 'sunset') {
      setWeatherIcon(sunny);
      setIconTitle('Clear Sunset');
    } else if (weatherInfo === 'Clear' && document.body.className === 'night') {
      setWeatherIcon(clearNight);
      setIconTitle('Clear Night');
    } else if (weatherDescription.includes('broken') && document.body.className === 'morning') {
      setWeatherIcon(partlyCloudy);
      setIconTitle('Partly Cloudy');
    } else if (weatherDescription.includes('broken') && document.body.className === 'day') {
      setWeatherIcon(partlyCloudy);
      setIconTitle('Partly Cloudy');
    } else if (weatherDescription.includes('few') && document.body.className === 'day') {
      setWeatherIcon(partlyCloudy);
      setIconTitle('Partly Cloudy');
    } else if (weatherDescription.includes('broken') && document.body.className === 'sunset') {
      setWeatherIcon(partlyCloudy);
      setIconTitle('Partly Cloudy');
    } else if (weatherDescription.includes('few') && document.body.className === 'sunset') {
      setWeatherIcon(partlyCloudy);
      setIconTitle('Partly Cloudy');
    } else if (weatherDescription.includes('broken') && document.body.className === 'night') {
      setWeatherIcon(partlyCloudyNight);
      setIconTitle('Partly Cloudy');
    } else if (weatherDescription.includes('few') && document.body.className === 'night') {
      setWeatherIcon(partlyCloudyNight);
      setIconTitle('Partly Cloudy');
    } else if (weatherInfo === 'Clouds' && !weatherDescription.includes('broken')
      && !weatherDescription.includes('few')) {
      setWeatherIcon(cloudy);
      setIconTitle('Cloudy');
    } else if (weatherDescription.includes('storm')) {
      setWeatherIcon(rainThunder);
      setIconTitle('Electric Storm');
    } else if (weatherInfo === 'Rain' && !weatherDescription.includes('light')
      && !weatherDescription.includes('moderate')) {
      setWeatherIcon(rain);
      setIconTitle('Rain');
    } else if (weatherInfo === 'Drizzle') {
      setWeatherIcon(lightRain);
      setIconTitle('Light Rain');
    } else if (weatherDescription.includes('light rain')) {
      setWeatherIcon(lightRain);
      setIconTitle('Light Rain');
    } else if (weatherDescription.includes('moderate rain')) {
      setWeatherIcon(lightRain);
      setIconTitle('Moderate Rain');
    } else if (weatherInfo === 'Fog') {
      setWeatherIcon(fog);
      setIconTitle('Fog');
    } else if (weatherInfo === 'Mist') {
      setWeatherIcon(fog);
      setIconTitle('Mist');
    } else if (weatherInfo === 'Snow') {
      setWeatherIcon(snow);
      setIconTitle('Snow');
    }
  }, [weatherDescription, weatherInfo, time]);

  const fullCityName = cityLocation[2] ? `${cityLocation[2]}, ${cityLocation[1]}` : cityLocation[1];

  return (
    <Grid item alignSelf="flex-start" sx={{ width: '320px' }}>
      <Typography variant="h5" className="cityTitle">
        {cityName || fullCityName}
      </Typography>
      {date ? (
        <Grid className="dayInfo" sx={{ mt: '5px' }}>
          {time}
          {' '}
          hs
          {' '}
          •
          {' '}
          {date}
        </Grid>
      ) : (
        <Typography variant="h5">
          <Skeleton animation="pulse" width={255} sx={{ bgcolor: 'grey.900' }} />
        </Typography>
      )}
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item className="temperature">
          {Math.round(apiData.current.temp)}
          °
        </Grid>
        <Grid item xs={5}>
          {weatherIcon ? <img src={weatherIcon} title={iconTitle} alt="Weather icon" className="main-icon" />
            : (
              <Skeleton
                variant="circular"
                animation="pulse"
                width={40}
                height={40}
                sx={{ mb: 1, bgcolor: 'grey.900' }}
              />
            )}
          <Typography className="main-weather-info">
            {weatherInfo}
          </Typography>
          <Typography className="main-weather-info">
            H:
            {' '}
            {Math.round(apiData.daily[0].temp.max)}
            ° • L:
            {' '}
            {Math.round(apiData.daily[0].temp.min)}
            °
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CityData;
