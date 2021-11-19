import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Typography, Box, CircularProgress } from "@mui/material";

import { loginSchema } from "../utils/schemas/loginSchema";

import { fetchLogin } from "../store/slices/authActions";

import Form from "../components/UI/Form";
import Input from "../components/UI/Input";

const Login = () => {
  const { login, password, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      login: login,
      password: password,
    },
  });

  const handleLogin = (data) => {
    dispatch(fetchLogin(data));
  };

  useEffect(() => {
    if (error) {
      setError("login", {
        type: "manual",
        message: error,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, errors]);

  return (
    <Box marginTop={6}>
      <Typography variant="h4" align="center">
        👾 Login Page
      </Typography>

      {!isLoading ? (
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input
            id="login"
            type="text"
            label="Login"
            name="login"
            error={!!errors.login}
            helperText={errors?.login?.message}
            required
            {...register("login")}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            name="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            required
            {...register("password")}
          />

          <Button type="submit" variant="contained" fullWidth>
            Log in
          </Button>
        </Form>
      ) : (
        <Box textAlign="center" marginTop={20}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Login;
