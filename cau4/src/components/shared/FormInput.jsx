import { FormGroup, FormLabel, makeStyles } from "@material-ui/core";
import React from "react";
import CustomInput from "./CustomInput";

const usestyles = makeStyles({
  label: {
    marginBottom: "4px",
    fontSize: "14px",
  },
});

function FormInput({ label, ...props }) {
  const classes = usestyles();
  return (
    <FormGroup>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <CustomInput disableUnderline fullWidth {...props} />
    </FormGroup>
  );
}

export default FormInput;
