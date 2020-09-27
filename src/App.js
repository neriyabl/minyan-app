import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// TODO update theme dependancy
import {
  makeStyles,
  CssBaseline,
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  Container,
  Drawer,
  List,
  ListItem,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

import AddIcon from "@material-ui/icons/Add";

import Header from "./components/Header";
import Bottom from "./components/Bottom";
import Prayer from "./components/Prayer";
import { prayers } from "./mocks";
import SimpleMap from "./components/SimpleMap";

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
});

const pages = ["מניינים", "פרופיל", "יציאה"];

function App() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const [drawerPage, setDrawerPage] = useState(0);

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
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header onOpenDrawer={toggleDrawer(true)} title={pages[drawerPage]} />
          <Container className={classes.appMain}>
            <Switch>
              <Route path="/list">
                {prayers.map((prayer) => (
                  <Prayer prayer={prayer} key={prayer._id} />
                ))}
              </Route>
              <Route exact path="/">
                <SimpleMap />
              </Route>
            </Switch>
          </Container>
          <Bottom
            value={page}
            onChange={(_event, newValue) => {
              setPage(newValue);
            }}
          />
          <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
            <List component="nav">
              {pages.map((page, i) => (
                <ListItem
                  button
                  key={page}
                  onClick={() => {
                    setDrawerPage(i);
                    toggleDrawer(false)({});
                  }}
                >
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <Typography>{page}</Typography>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;
