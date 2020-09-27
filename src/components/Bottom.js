import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  bottomNavigation: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    width: "100%",
  },
});

export default function Bottom({ value, onChange }) {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={value}
      onChange={onChange}
      showLabels
      className={classes.bottomNavigation}
    >
      <BottomNavigationAction
        label="קרוב"
        icon={<LocationOnIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="מועדפים"
        icon={<FavoriteIcon />}
        component={Link}
        to="/list"
      />
      <BottomNavigationAction
        label="אחרונים"
        icon={<RestoreIcon />}
        component={Link}
        to="/list"
      />
    </BottomNavigation>
  );
}
