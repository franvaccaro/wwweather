/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import './styles/SearchForm.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid, Stack, Tooltip, Typography, useMediaQuery,
} from '@mui/material';
import location from '../assets/location.svg';
import searchIcon from '../assets/search.svg';
import logoNube from '../assets/logo_nube.svg';
import textLogo from '../assets/logo_weather.svg';
import { getUserWeather } from '../redux/actions/getUserWeatherAction';
import { handleSearch } from '../redux/actions/handleSearchAction';
import DialogCard from './DialogCard';
import Credits from './Credits';

function SearchForm() {
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.locationData.location[0]);
  const [inputValue, setinputValue] = useState(null);

  const handleUserWeather = (e) => {
    e.preventDefault();
    userLocation ? dispatch(getUserWeather(userLocation.coords)) : alert('Please allow location to continue');
  };

  const handleInput = (e) => {
    e.preventDefault();
    inputValue ? dispatch(handleSearch(inputValue)) : null;
    document.getElementById('form-id').reset();
  };

  const isMobile = useMediaQuery('(max-width:958px)');

  return (
    <Grid
      container
      justifyContent="space-evenly"
      sx={{ flexWrap: 'nowrap' }}
      className="searchBar"
    >
      <Grid item alignSelf="center" textAlign="center">
        <Stack direction="row" spacing={1}>
          <Tooltip title="Credits">
            <input
              type="image"
              src={logoNube}
              alt="cloudLogo"
              className="logo"
              onClick={() => dispatch({
                type: 'SET_CREDITS',
                payload: {
                  credits: true,
                },
              })}
            />
          </Tooltip>
          {isMobile ? null : <img src={textLogo} alt="textLogo" className="logo" />}
        </Stack>
      </Grid>
      {isMobile ? null : (
        <Grid item alignSelf="center">
          <Stack direction="row" spacing={1}>
            <input
              type="image"
              src={location}
              title="Location"
              className="locationIcon"
              alt="location-icon"
              onClick={(e) => { handleUserWeather(e); }}
            />
            <Typography className="locationText">
              My location:
              {' '}
              {userLocation ? `${userLocation.city},` : 'Not available'}
              {' '}
              {userLocation ? userLocation.country : ''}
            </Typography>
          </Stack>
        </Grid>
      )}
      <Grid item alignSelf="center">
        <form id="form-id" onSubmit={(e) => handleInput(e)}>
          <Grid className="inputContainer">
            <input
              type="text"
              className="inputField"
              placeholder="Search..."
              onChange={(e) => setinputValue(e.target.value.trim())}
            />
            <input
              type="image"
              src={searchIcon}
              className="searchIcon"
              onClick={(e) => handleInput(e)}
              alt="search-icon"
            />
          </Grid>
        </form>
      </Grid>
      {isMobile
        ? (
          <Grid item alignSelf="center">
            <input
              type="image"
              src={location}
              title="Location"
              className="locationIcon"
              alt="location-icon"
              onClick={(e) => { handleUserWeather(e); }}
            />
          </Grid>
        )
        : null}
      <DialogCard />
      <Credits />
    </Grid>
  );
}

export default SearchForm;
