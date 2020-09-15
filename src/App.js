import React, { useState } from "react";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Container,
  Drawer,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

import Header from "./components/Header";
import Bottom from "./components/Bottom";
import { prayers } from "./mocks";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[400],
    },
  },
  direction: "rtl",
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
    height: "100vh",
    padding: "10px",
    paddingTop: "60px",
    backgroundColor: "#ccc",
  },
  text: {
    marginTop: 5,
    paddingRight: 10,
  },
  textLeft: {
    marginTop: 5,
    textAlign: "end",
  },
});

function App() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header onOpenDrawer={toggleDrawer(true)} />
        <Container className={classes.appMain}>
          <div className="priers">
            {prayers.map((pr) => (
              <Card
                key={pr._id}
                style={{ margin: 10 }}
                onClick={() => console.log(pr)}
              >
                <CardActionArea>
                  <CardContent>
                    <Grid container justify="space-between">
                      <Grid item xs={5}>
                        <Typography variant="h5">{pr.name}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography className={classes.text}>
                          {pr.time}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography className={classes.textLeft}>
                          {pr.address.substring(0, pr.address.indexOf(","))}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </Container>
        <Bottom
          value={page}
          onChange={(_event, newValue) => {
            setPage(newValue);
          }}
        />
        <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
          <span>sdfds</span>
        </Drawer>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
