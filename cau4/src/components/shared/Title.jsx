import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const usestyles = makeStyles({
  title: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
});

function Title({ children }) {
  const classes = usestyles();

  return <Typography className={classes.title}> {children} </Typography>;
}

export default Title;
