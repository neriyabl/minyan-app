import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    paddingLeft: theme.spacing(7),
  },
}));

export default function Header({ onOpenDrawer }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onOpenDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          תפילות
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
