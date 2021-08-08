import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
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

const defaultWork = { name: "", position: "" };

function WorkForm({ item, onCancel, onSubmit, ...props }) {
  const classes = usestyles();
  const [work, setWork] = useState(item ?? defaultWork);

  const handleSubmit = (e) => {
    if (work.name === "" || work.position === "") {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    onSubmit && onSubmit({ ...work }, e);
    setWork(defaultWork);
  };

  const handleCancel = (e) => {
    onCancel && onCancel(e);
  };

  const handleWorkChange = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
  };

  return (
    <Box {...props}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormInput
            label="Công ty"
            value={work.name}
            name="name"
            onChange={handleWorkChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            label="Chức vụ"
            value={work.position}
            name="position"
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
        <Button onClick={handleCancel} className={classes.button}>
          Hủy bỏ
        </Button>
      </Box>
    </Box>
  );
}

export default WorkForm;
