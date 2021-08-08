import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Provider } from "react-redux";
import Profile from "./components/profile";
import { store } from "./store";

const useStyles = makeStyles({
  root: {
    padding: "12px 16px",
    maxWidth: "800px",
    margin: "16px auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Box padding="0 8px">
        <Paper className={classes.root}>
          <Profile />
        </Paper>
      </Box>
    </Provider>
  );
}

export default App;
