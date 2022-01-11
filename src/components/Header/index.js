import React from "react";

// Routing
import { NavLink, useNavigate } from "react-router-dom";

// Facade
import { facade } from "../../apiFacade";

// Styles
import {
  Wrapper,
  Content,
  Menu,
  StyledLogout,
  ProfileLink,
  StyledForm,
} from "./Header.styles";

function Header({
  loggedIn,
  setLoggedIn,
  setLoginCredentials,
}) {
  const navigate = useNavigate();
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setLoginCredentials({ username: "", password: "" });
    navigate("/");
  };

  return (
    <Wrapper>
      <Content>
        <h1>
          <NavLink className="header_nav" to="/">
            Startcoder
          </NavLink>
        </h1>
        <Menu>
          {!loggedIn ? (
            <>
              <NavLink className="header_nav" to="/login">
                Login
              </NavLink>
              <div className="line"></div>
              <NavLink className="header_nav" to="/signup">
                Sign up
              </NavLink>
            </>
          ) : (
            <StyledLogout onClick={logout}>Logout</StyledLogout>
          )}
          {loggedIn && <div className="line"></div>}
          {loggedIn && sessionStorage.getItem("roles") === '"user"' && (
            <NavLink className="header_nav" to="/">
              {sessionStorage.getItem("username")}
            </NavLink>
          )}
          {sessionStorage.getItem("roles") === '"admin"' && (
            <NavLink className="header_nav" to="/adminpanel">
              Admin
            </NavLink>
          )}
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;
