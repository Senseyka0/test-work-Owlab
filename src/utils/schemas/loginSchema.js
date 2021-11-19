import * as yup from "yup";

export const loginSchema = yup.object().shape({
  login: yup.string().required("Login is a required field"),
  password: yup.string().required("Password is a required field"),
});
