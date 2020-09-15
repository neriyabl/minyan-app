import React, { useState } from "react";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Container,
  Drawer,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

import Header from "./components/Header";
import Bottom from "./components/Bottom";
import Prayer from "./components/Prayer";
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
          {prayers.map((prayer) => (
            <Prayer prayer={prayer} />
          ))}
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
