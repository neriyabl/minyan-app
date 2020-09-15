import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    marginTop: 5,
    paddingRight: 10,
  },
  textLeft: {
    marginTop: 5,
    textAlign: "end",
  },
});

export default function Prayer({ prayer }) {
  const classes = useStyles();
  return (
    <Card
      key={prayer._id}
      style={{ margin: 10 }}
      onClick={() => console.log(prayer)}
    >
      <CardActionArea>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item xs={5}>
              <Typography variant="h5">{prayer.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.text}>{prayer.time}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.textLeft}>
                {prayer.address.substring(0, prayer.address.indexOf(","))}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
