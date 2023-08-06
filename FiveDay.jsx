import React, { useEffect, useState } from "react";
import { Container, Card, Typography, CardContent, Grid } from "@mui/material";

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
        {/* grid tag below houses all of the 5 day cards will now add grid spacing. */}
        {/* each card is set to grid spacing 2 then will leave enogh space for all 5 cards to fit on one row.  */}
        <Grid container>
          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography> Monday </Typography>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>temp</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>weather</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>wind speed</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>humidity</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography> Tuesday </Typography>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>temp</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>weather</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>wind speed</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>humidity</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography> Wednesday </Typography>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>temp</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>weather</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>wind speed</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>humidity</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography> Thursday </Typography>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>temp</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>weather</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>wind speed</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>humidity</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography> Friday </Typography>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>temp</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>weather</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>wind speed</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    {/* cant figure out how to actually space them the site keeps breaking.  */}
                    <Typography>humidity</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
