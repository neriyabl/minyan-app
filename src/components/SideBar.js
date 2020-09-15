import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  sideBar: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "300px",
    height: "100%",
    backgroundColor: "#cad",
  },
};

const SideBar = (props) => {
  const { classes } = props;
  return <div className={classes.sideBar}> side bar</div>;
};

export default withStyles(styles)(SideBar);
