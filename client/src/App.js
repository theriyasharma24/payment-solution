import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
// import PrivateRoute from "./components/routing/PrivateRoute";
import Home from './components/pages/Home';
import PaymentSummary from './components/pages/PaymentSummary';
import Notification from './components/pages/Notification';
import AgentDescription from './components/pages/AgentDescription';
import ClientForm from './components/pages/ClientForm';
import ClientrdState from './context/clientrd/ClientrdState';

import './App.css';

import styled from 'styled-components';
import breakpoints from './essentials/screensize';

const Container = styled.div`
    padding: 8vw 5% 1.5% 5%;
    justify-content: center;
    @media (max-width: ${breakpoints.sm}px) {
        padding: 24vw 2% 1.5% 2%;
    }
`;

const App = () => {
    return (
        <AuthState>
            <ClientrdState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <Container>
                                <Alerts />
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route
                                        exact
                                        path="/register"
                                        element={<Register />}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        element={<Login />}
                                    />
                                    <Route
                                        exact
                                        path="/paymentsummary"
                                        element={<PaymentSummary />}
                                    />
                                    <Route
                                        exact
                                        path="/notification"
                                        element={<Notification />}
                                    />
                                    <Route
                                        exact
                                        path="/agentdescription"
                                        element={<AgentDescription />}
                                    />
                                    <Route
                                        exact
                                        path="/clientform"
                                        element={<ClientForm />}
                                    />
                                </Routes>
                            </Container>
                        </Fragment>
                    </Router>
                </AlertState>
            </ClientrdState>
        </AuthState>
    );
};

export default App;
