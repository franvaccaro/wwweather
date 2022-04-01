import React, { useEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import Loader from './components/loader/Loader.js'
import Backdrop from '@mui/material/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from './redux/actions/getWeatherAction';
import { handleLocation } from './redux/actions/handleLocationAction';

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

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    const success = (pos) => {
      dispatch(handleLocation(pos))
    }
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
    getLocation();
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchForm />
      {isLoaded ? <WeatherCard />
        : <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!isLoaded} >
          <Loader />
        </Backdrop>
      }
    </ThemeProvider>
  )
};

export default App;
