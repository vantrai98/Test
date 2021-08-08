import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontWeight: "600",
  },
  description: {
    color: "#5a5a5a",
  },
  icon: {
    borderRadius: "50%",
    background: "#e8e8e8",
    padding: "10px",
  },
  button: {
    background: "#FFC108",
    color: "#fff",
    padding: "8px",
    "& svg": {
      fontSize: "1rem",
    },
  },
});

function InfoItem({ title, description, IconComponent, onEdit, ...props }) {
  const classes = useStyles();

  const handleEditButtonClick = (e) => {
    onEdit && onEdit(e);
  };

  return (
    <Box display="flex" alignItems="center" {...props}>
      <IconComponent className={classes.icon} />
      <Box flexGrow="1" padding="0 16px">
        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
      </Box>
      <IconButton
        className={classes.button}
        size="small"
        onClick={handleEditButtonClick}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}

export default InfoItem;
