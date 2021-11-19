import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";

import { logOut } from "../store/slices/authActions";
import { ROUTES } from "../utils/routes";

import Flex from "./UI/Flex";

const Header = () => {
  const { isAuth, userData } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(logOut());
    history.push("/login");
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Flex>
          <StyledLink to={ROUTES.HOME}>Home</StyledLink>
          <StyledLink to={ROUTES.PROFILE}>Profile</StyledLink>
          <StyledLink to={ROUTES.NEWS}>News</StyledLink>
        </Flex>

        <Flex alignCenter>
          {isAuth && (
            <Typography variant="p" margin="0 20px">
              Hello again, {userData.login}
            </Typography>
          )}

          <Button variant="contained" color="primary" onClick={handleLogOut}>
            {isAuth ? "Log out" : "Login"}
          </Button>
        </Flex>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;

  cursor: pointer;

  text-decoration: none;
  color: white;
  font-size: 18px;
`;

export default Header;
