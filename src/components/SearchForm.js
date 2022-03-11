import React from 'react';
import './styles/SearchForm.css';
// import AppBar from '@mui/material/AppBar';
// import { Badge, TextField, IconButton, InputAdornment, Container, Grid, Typography } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import location from '../assets/location.svg';
import searchIcon from '../assets/search.svg';

function SearchForm() {
  return (
    // <AppBar>
    //   <Container direction="column">
    //     <Grid container justifyContent="space-between" direction='row' padding={2}>
    //       <Grid item alignSelf="center">
    //         <Typography color='textPrimary' variant='h5'>wwweather</Typography>
    //       </Grid>
    //       <Grid item>
    // <form>
    //   <TextField
    //     id="filled-basic"
    //     label="Search"
    //     variant="filled"
    //     autoComplete="off"
    //     fullWidth
    //     InputProps={{
    //       endAdornment: (
    //         <InputAdornment position="end">
    //           <IconButton>
    //             <SearchIcon />
    //           </IconButton>
    //         </InputAdornment>
    //       )
    //     }}
    //   />
    // </form>
    //       </Grid>
    //       <Grid item alignSelf="center">
    //         <Badge color="error">
    //           <LocationOnIcon />
    //           <Typography color='textPrimary' variant='p'>Buenos Aires, Argentina</Typography>
    //         </Badge>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </AppBar>

    <div className='searchBar'>
      <div className='appTitle'>wwweather</div>
      <img src={location} className='locationIcon' alt='location-icon'></img>
      <div className='locationText'>Buenos Aires, Argentina</div>
      <form>
        <div className='inputContainer'>
          <input type='text' className='inputField'></input>
          <button type='submit' className='searchButton'>
            <img src={searchIcon} className='searchIcon' alt='search-icon'></img>
          </button>
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
