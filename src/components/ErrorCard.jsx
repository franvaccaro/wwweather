import React from 'react';
import './styles/ErrorCard.css';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

function ErrorCard() {
  const dispatch = useDispatch();
  document.body.className = 'error';

  const handleReload = (e) => {
    e.preventDefault();
    window.location.reload();
    setInterval(() => {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          notFound: false,
        },
      });
    }, 1000);
  };

  return (
    <Grid
      container
      className="errorContainer"
    >
      <Grid item className="errorContent">
        <Grid container direction="column" gap={4} className="errorData">
          <Grid item className="errorTitle">
            Oops!
          </Grid>
          <Grid item className="errorSubtitle">
            Seems like you are lost,
            {' '}
            but do not worry...
          </Grid>
          <Grid item className="btnContainer">
            <button
              type="button"
              className="errorButton"
              onClick={(e) => handleReload(e)}
            >
              Go back
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ErrorCard;
