import { Box } from "@material-ui/core";
import React from "react";
import Education from "./education";
import Personal from "./personal";
import Work from "./work";

function Profile() {
  return (
    <Box>
      <Personal />
      <Education marginTop="20px" />
      <Work marginTop="20px" />
    </Box>
  );
}

export default Profile;
