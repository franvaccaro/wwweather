import React from 'react';
import './styles/SearchForm.css';
import {
  Dialog, Grid, Link, useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function Credits() {
  const dispatch = useDispatch();
  const openCredits = useSelector((state) => state.dialogState.openCredits);
  const isMobile = useMediaQuery('(max-width:820px)');

  return (
    <Dialog
      onClose={() => dispatch({
        type: 'SET_CREDITS',
        payload: {
          credits: false,
        },
      })}
      open={openCredits}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <Grid
        container
        direction="column"
        className="creditsContainer"
        gap={1}
        sx={{
          p: isMobile ? 4 : 6,
          pl: isMobile ? 4 : 12,
          pr: isMobile ? 4 : 12,
          border: 'secondary',
        }}
      >
        <Grid item className="creditsTitle">
          CREDITS
        </Grid>
        <Grid item className="creditsInfo">
          {'Developer '}
          <Link
            href="https://github.com/franvaccaro"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#FFA900"
            sx={{ fontWeight: 'bold', ml: '5px' }}
          >
            Franco Vaccaro
          </Link>
        </Grid>
        <Grid item className="creditsInfo">
          {'Designer '}
          <Link
            href="https://www.behance.net/bqad"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="#FFA900"
            sx={{ fontWeight: 'bold', ml: '5px' }}
          >
            Adrián Vaccaro
          </Link>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default Credits;
