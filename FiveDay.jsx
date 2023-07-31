import React, {useEffect, useState} from 'react';
import { Container, Card, Typography} from '@mui/material';
import CardContent from '@mui/material';

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

  return (
    
    <>
    <Container>
        <Card sx={{ minWidth:275 }}>
            <CardContent>
                <Typography>  </Typography>
                {/* data.daily[i]temp.day????? data.daily[i].weather[0].icon data.daily[i].wind_speed */}
            </CardContent>

        </Card>

        
    </Container>
    
    </>
  )
}
