import React, { useEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import Loader from './components/loaders/Loader.js'
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from './redux/actions/getWeatherAction';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#121212',
      }
    }
  });

  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.loaderState.loader)

  const setBackground = () => {
    let currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 6) {
      document.body.className = "night"
    } if (currentTime >= 6 && currentTime < 12) {
      document.body.className = "morning"
    } if (currentTime >= 12 && currentTime < 17) {
      document.body.className = "day"
    } if (currentTime >= 17 && currentTime < 20) {
      document.body.className = "sunset"
    } if (currentTime >= 20 && currentTime < 24) {
      document.body.className = "night"
    }
  }

  useEffect(() => {
    dispatch(getWeather());
    setBackground()
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchForm />
      {isLoaded ? <WeatherCard /> : <Loader />}
    </ThemeProvider>
  )
};

export default App;
