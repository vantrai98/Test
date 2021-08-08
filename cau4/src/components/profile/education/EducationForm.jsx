import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import FormInput from "../../shared/FormInput";

const usestyles = makeStyles({
  button: {
    fontSize: "12px",
    textTransform: "none",
    borderRadius: "15px",
    padding: "2px 12px",
    height: "30px",
    fontWeight: "600",
    margin: "8px",
  },
  mainButton: {
    color: "#fff",
    background: "#FFC108",
  },
});

const defaultEducation = { name: "", majoring: "" };

function EducationForm({ item, onCancel, onSubmit, ...props }) {
  const classes = usestyles();
  const [education, setWork] = useState(item ?? defaultEducation);

  const handleSubmit = (e) => {
    if (education.name === "" || education.majoring === "") {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    onSubmit && onSubmit({ ...education }, e);
    setWork(defaultEducation);
  };

  const handleCancel = (e) => {
    onCancel && onCancel(e);
  };

  const handleWorkChange = (e) => {
    setWork({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <Box {...props}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormInput
            label="Trường"
            name="name"
            value={education.name}
            onChange={handleWorkChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            label="Ngành nghể"
            name="majoring"
            value={education.majoring}
            onChange={handleWorkChange}
          />
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="flex-end">
        <Button
          className={`${classes.button} ${classes.mainButton}`}
          size="small"
          onClick={handleSubmit}
        >
          Xác nhận
        </Button>
        <Button className={classes.button} onClick={handleCancel}>
          Hủy bỏ
        </Button>
      </Box>
    </Box>
  );
}

export default EducationForm;
