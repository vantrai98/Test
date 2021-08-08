import { Button, makeStyles } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";

const usestyles = makeStyles({
  root: {
    color: "#FFC108",
    textTransform: "none",
    fontWeight: "600",
    padding: "0 16px 0 0 ",
    borderRadius: "20px",
  },
  icon: {
    padding: "10px",
    border: "1px dashed #FFC108",
    borderRadius: "50%",
    marginRight: "12px",
  },
});

function AddButton({ children, ...props }) {
  const classes = usestyles();

  return (
    <Button
      variant="text"
      classes={{ root: classes.root }}
      disableFocusRipple
      disableRipple
      {...props}
    >
      <AddIcon className={classes.icon} /> {children}
    </Button>
  );
}

export default AddButton;
