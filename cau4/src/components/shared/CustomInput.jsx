import { Input, withStyles } from "@material-ui/core";

const CustomInput = withStyles({
  root: {
    background: "#e8e8e8",
    borderRadius: "16px",
  },
  input: {
    padding: "6px 16px",
    color: "#5a5a5a",
  },
})(Input);

export default CustomInput;
