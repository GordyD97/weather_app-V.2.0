import React, {useEffect, useState} from 'react';
import { Container, Card, Typography, CardContent} from '@mui/material'
import Grid from '@mui/material';

// the above line is commented out because it breaks the whole app. 

export const FiveDay = () => {
// api call goes here. 
// map the card contexts from a map function then include api call within the cards of each card. 
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("your-api-endpoint")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    // dont know if this is the best way to do it ths is just an example. 
{
  /* data.daily[i]temp.day????? data.daily[i].weather[0].icon data.daily[i].wind_speed */
}
  return (
    
    <>
    <Container>
        <Card sx={{ minWidth:275 }}>
            <CardContent>
                <Typography> Monday </Typography>
                <Grid>
                    <Grid item >
                        {/* cant figure out how to actually space them the site keeps breaking.  */}

                    </Grid>


                </Grid>

                <Typography>temp</Typography>
                <Typography>weather</Typography>
                <Typography>wind speed</Typography>
                <Typography>humidity</Typography>
            </CardContent>

        </Card>

        
    </Container>
    
    </>
  )
}
