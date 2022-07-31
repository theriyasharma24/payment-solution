import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
//importing image
import Agent from '../../assets/agent.png';
import styled from 'styled-components';
import breakpoints from '../../essentials/screensize';
import './Login.css';
import SubmitButton from '../containers/SubmitButton';
import { useNavigate } from 'react-router-dom';

const ActionButton = styled(SubmitButton)`
    && {
        background: #0ec0e2;
        color: black;
        margin-top: 2em;
        width: 60%;
    }
`;

const Login = (props) => {
    let navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/paymentsummary');
        } else {
            navigate('/login');
        }
        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [isAuthenticated]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <h1>Login</h1>
                    </Grid>
                    <form onSubmit={onSubmit}>
                        <Grid item xs={12} md={12}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} md={6}>
                                    <img
                                        src={Agent}
                                        alt="payment-solution"
                                        height="440"
                                        width="100%"
                                    ></img>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {/* <Grid container > */}
                                    <Grid item xs={12} md={12}>
                                        <Box
                                            sx={{
                                                '& > :not(style)': { m: 1 }
                                            }}
                                            noValidate
                                        >
                                            <TextField
                                                id="email"
                                                label="Email-id"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={onChange}
                                                required
                                                variant="outlined"
                                                fullWidth={true}
                                            />
                                            {/* <FormControlLabel
                                                label="Check to login using OTP insted of password"
                                                control={
                                                    <Checkbox
                                                        checked={checked}
                                                        onChange={handleChange}
                                                    />
                                                }
                                            /> */}
                                            {/* Using tertiary operator */}
                                            {checked ? (
                                                <>
                                                    <TextField
                                                        id="number"
                                                        label="Mobile No."
                                                        name="number"
                                                        value={number}
                                                        onChange={onChange}
                                                        required
                                                        variant="outlined"
                                                        fullWidth={true}
                                                    />
                                                    <TextField
                                                        id="otp"
                                                        label="OTP"
                                                        name="OTP"
                                                        value={OTP}
                                                        onChange={onChange}
                                                        required
                                                        variant="outlined"
                                                        fullWidth={true}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <TextField
                                                        id="password"
                                                        label="Password"
                                                        name="password"
                                                        type="password"
                                                        value={password}
                                                        onChange={onChange}
                                                        required
                                                        variant="outlined"
                                                        fullWidth={true}
                                                    />
                                                </>
                                            )}

                                            <Stack spacing={6} direction="row">
                                                <div
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >
                                                    <ActionButton
                                                        type="submit"
                                                        style={{
                                                            background:
                                                                'rgba(149, 213, 84)'
                                                        }}
                                                    >
                                                        Login
                                                    </ActionButton>
                                                </div>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                    {/* </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Box>
        </>
    );
};

export default Login;
