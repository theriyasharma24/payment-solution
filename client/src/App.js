import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
// import PrivateRoute from "./components/routing/PrivateRoute";
import Home from "./components/pages/Home";

import "./App.css";

import styled from "styled-components";
import breakpoints from "./essentials/screensize";

const Container = styled.div`
  padding: 8vw 52px 18px 52px;
  justify-content: center;
  @media (max-width: ${breakpoints.sm}px) {
    padding: 24vw 52px 18px 52px;
  }
`;

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <Container>
              <Alerts />
              <Routes>
                <Route exact path="/" component={Home} />{" "}
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Routes>
            </Container>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
