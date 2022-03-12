import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const theme = createTheme({
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchForm />
      <WeatherCard />
    </ThemeProvider>
  )
};

export default App;
