import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import chevron from '../assets/right.svg';
import { searchWeather } from '../redux/actions/searchWeatherAction';

function DialogCard() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.searchResults.results);
  const openDialog = useSelector((state) => state.dialogState.openDialog);

  return (
    <Dialog
      onClose={() => dispatch({
        type: 'SET_DIALOG',
        payload: {
          openDialog: false,
        },
      })}
      open={openDialog}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <Grid className="dialogContainer">
        <Grid className="dialogTitle">Choose your city</Grid>
        <Divider />
        <List sx={{ pt: 0 }}>
          {results.map((city) => (
            <Grid key={`${city.lat},${city.long}`}>
              <ListItem
                button
                onClick={() => dispatch(searchWeather(city))}
              >
                <Grid container justifyContent="space-between" sx={{ flexWrap: 'nowrap' }}>
                  <Grid item className="dialogList">
                    {`${city.name}, `}
                    {city.state ? `${city.state}, ` : ''}
                    {city.country}
                  </Grid>
                  <Grid item className="chevron">
                    <img src={chevron} alt="icon" />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </Grid>
          ))}
        </List>
      </Grid>
    </Dialog>
  );
}

export default DialogCard;
