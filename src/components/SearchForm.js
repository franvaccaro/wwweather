import React from 'react';
import './styles/SearchForm.css';
import location from '../assets/location.svg';
import searchIcon from '../assets/search.svg';
import logo from '../assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWeather } from '../redux/actions/getUserWeatherAction';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

function SearchForm() {

  const dispatch = useDispatch();
  const userLocation = useSelector(state => state.locationData.location[0]);

  const handleUserWeather = (e) => {
    e.preventDefault();
    userLocation ? dispatch(getUserWeather(userLocation.coords)) : alert('Please allow location to continue');
  }

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Grid container justifyContent="space-around" className='searchBar'>
      <Grid item alignSelf="center" textAlign="center" xs={2}>
        <img src={logo} alt='logo' className='logo'></img>
      </Grid>
      <Grid item alignSelf="center">
        {isMobile ? null :
          <Stack direction="row" spacing={1}>
            <input type="image" src={location}
              title='Location'
              className='locationIcon'
              alt='location-icon'
              onClick={(e) => { handleUserWeather(e) }}></input>
            <Typography className='locationText'>
              My location: {userLocation ? `${userLocation.city},` : 'Not available'} {userLocation ? userLocation.country : ''}
            </Typography>
          </Stack>
        }
      </Grid>
      <Grid item alignSelf="center">
        <form className='inputField'>
          <input type='text' className='inputField' placeholder="Search..."></input>
          <input type="image" src={searchIcon} className='searchIcon' alt='search-icon'></input>
        </form>
      </Grid>
    </Grid>
  );
}

export default SearchForm;