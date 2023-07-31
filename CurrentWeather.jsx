import React from 'react'
import { Container, Typography, Button, TextField, Divider} from '@mui/material'

export const CurrentWeather = () => {
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
