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
  });

  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.loaderState.loader)

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchForm />
      {isLoaded ? <WeatherCard /> : <Loader />}
    </ThemeProvider>
  )
};

export default App;
