import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Login from "@mui/icons-material/ExitToApp";
import Logout from "@mui/icons-material/Logout";
import Home from "@mui/icons-material/Home";
import Register from "@mui/icons-material/AppRegistration";
import Shop from "@mui/icons-material/AddBusiness";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import AccountCircle from "@mui/icons-material/AccountCircle";
import breakpoints from "../../essentials/screensize";

//importing image
import Logo from "../../assets/theperception_whitelogo.svg";

const LogoIcon = styled.div`
width: 4.5vw;
margin-top: 0.7vh;
padding: 0.3rem;
    @media (max-width: ${breakpoints.sm}px) {
      width: 3.5rem;
      margin-top: 0.5rem;
      padding: 0.3rem;
    }
  }
`;

const Navbar = ({ icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const [anchorElNav, setAnchorElNav] = useState(null);

  let history = useHistory();

  const onLogout = () => {
    logout();
    history.push({ pathname: "/login" });
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const authLinks = (
    <>
      <Link to="/">
        <IconButton size="large" aria-label="account of current user">
          <Typography variant="body2" align="center">
            {user && user.name}
          </Typography>
          <AccountCircle />
        </IconButton>
      </Link>
      <IconButton
        size="large"
        onClick={onLogout}
        aria-label="logout"
        style={{ color: "grey" }}
      >
        <Logout />
        <Typography variant="body2" align="center">
          Logout
        </Typography>
      </IconButton>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/login">
        <IconButton size="large" aria-label="login" style={{ color: "grey" }}>
          <Login />
          <Typography variant="body2" align="center">
            Login
          </Typography>
        </IconButton>
      </Link>
      <Link to="/register">
        <IconButton
          size="large"
          aria-label="register"
          style={{ color: "grey" }}
          label="Register"
        >
          <Register />
          <Typography variant="body2" align="center">
            Register
          </Typography>
        </IconButton>
      </Link>
    </>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: "white" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              >
                <LogoIcon>
                  <Link to="/">
                    <img
                      src={icon}
                      alt="The Perception Shop"
                      className="logo"
                    ></img>{" "}
                  </Link>
                </LogoIcon>
              </Box>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  style={{ color: "#c9c6c5" }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  // anchorOrigin={{
                  //   vertical: "bottom",
                  //   horizontal: "left",
                  // }}
                  // keepMounted
                  // transformOrigin={{
                  //   vertical: "top",
                  //   horizontal: "left",
                  // }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { sx: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/aboutus">
                      <IconButton
                        size="large"
                        aria-label="register"
                        style={{ color: "grey" }}
                        label="Home"
                      >
                        <Home />
                        <Typography variant="body2" align="center">
                          About Us
                        </Typography>
                      </IconButton>
                    </Link>
                    <Link to="/shop">
                      <IconButton
                        size="large"
                        aria-label="shop"
                        style={{ color: "grey" }}
                      >
                        <Shop />
                        {/* <Typography variant="body2" align="center">
                          Shop
                        </Typography> */}
                      </IconButton>
                    </Link>
                    {isAuthenticated ? authLinks : guestLinks}
                  </MenuItem>
                </Menu>
              </Box>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {isAuthenticated ? authLinks : guestLinks}{" "}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

Navbar.propTypes = {
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  icon: Logo,
};

export default Navbar;
