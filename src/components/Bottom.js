import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

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
      <BottomNavigationAction label="אחרונים" icon={<RestoreIcon />} />
      <BottomNavigationAction label="מועדפים" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="קרוב" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
