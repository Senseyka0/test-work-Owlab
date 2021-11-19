import { TextField } from "@mui/material";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => (
  <TextField variant="outlined" margin="normal" ref={ref} fullWidth {...props} />
));

export default Input;
