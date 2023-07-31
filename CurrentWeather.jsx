import React from 'react'
import { Container, Typography, Button, TextField } from '@mui/material'

export const CurrentWeather = () => {
  return (
    <>
      <Container>
        <Typography> Weather app</Typography>
        <Typography>40°F</Typography>
        <Typography>22°C</Typography>
        <TextField label="Outlined secondary" color="secondary" focused />

        <Button variant="contained">Search</Button>
        <Button variant="outlined">Clear History</Button>
      </Container>
    </>
  );
}
