import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import FormInput from "../../shared/FormInput";
import Title from "../../shared/Title";

function Personal(props) {
  const { name, email, birthday, ID } = useSelector(
    (state) => state.profile.personal
  );

  return (
    <Box {...props}>
      <Title>Thông tin cá nhân</Title>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormInput label="Tên hiển thị" value={name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput label="Email" value={email} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider> */}
          <FormInput label="Ngày tháng năm sinh" type="date" value={birthday} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput label="Số chứng minh thư" value={ID} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Personal;
