import React from 'react'
import { Container, Typography, Button, TextField, Divider} from '@mui/material'

export const CurrentWeather = () => {
  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (city.value && countryValue) {
      const REACT_APP_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${REACT_APP_API_KEY}&units=metric`;
      const response = await fetch(REACT_APP_API_URL);
      const data = await response.json();
      console.log(data)
    }
  }

  return (
    
      <Container>
        <Typography variant='h5'> Weather app</Typography>
        <Typography variant='h3'>40°F</Typography>
        <Typography variant='h6'>22°C</Typography>
        
        
        <TextField label="Search City" color="secondary" focused />
        <Divider></Divider>
        <Button variant="contained">Search</Button>
        <Button variant="outlined">Clear History</Button>
      </Container>
    
  );
}
