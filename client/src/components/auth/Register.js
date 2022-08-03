import { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import SubmitButton from '../containers/SubmitButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useNavigate, Link } from 'react-router-dom';
//importing image
import landingimage from '../../assets/home.png';
import styled from 'styled-components';
import colors from '../../essentials/colors';

const ActionButton = styled(SubmitButton)`
    && {
        background: #b658ff;
        color: black;
        margin-top: 2em;
        // width: 60%;
    }
`;

const Register = () => {
    let navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [otp] = useState();

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/clientform');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [isAuthenticated]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    const setOtp = () => {
        <div className="nototp" style={{ display: 'none' }}></div>;
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} p={1}>
                    <form onSubmit={onSubmit}>
                        <Grid item xs={12} md={12}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} md={5}>
                                    <img
                                        src={landingimage}
                                        alt="The Perception Shop"
                                        className="logo"
                                        height="440"
                                        width="100%"
                                    ></img>
                                </Grid>
                                <Grid item xs={12} md={7} p={2}>
                                    <Grid item xs={12} md={12}>
                                        <h1>Register</h1>
                                    </Grid>
                                    {/* <Grid container > */}
                                    <Grid item xs={12} md={12}>
                                        <Box
                                            sx={{
                                                '& > :not(style)': { m: 1 }
                                            }}
                                            noValidate
                                            // autoComplete="off"
                                        >
                                            <TextField
                                                id="name"
                                                label="Name"
                                                name="name"
                                                value={name}
                                                onChange={onChange}
                                                required
                                                variant="outlined"
                                                fullWidth={true}
                                            />
                                            <TextField
                                                id="email"
                                                label="Email-id"
                                                name="email"
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
                                                        id="mobile"
                                                        label="Mobile No."
                                                        name="name"
                                                        value={name}
                                                        onChange={onChange}
                                                        required
                                                        variant="outlined"
                                                        fullWidth={true}
                                                    />
                                                    <TextField
                                                        id="otp"
                                                        label="OTP"
                                                        name="otp"
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
                                                        minLength="6"
                                                        variant="outlined"
                                                        fullWidth={true}
                                                    />
                                                    <TextField
                                                        id="confirm"
                                                        label="Confirm Password"
                                                        name="password2"
                                                        type="password"
                                                        value={password2}
                                                        minLength="6"
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
                                                        Register
                                                    </ActionButton>
                                                </div>
                                            </Stack>
                                            <h6>
                                                Already have an account ?{' '}
                                                <Link
                                                    to="/"
                                                    style={{
                                                        color: `${colors.orange}`
                                                    }}
                                                >
                                                    Login
                                                </Link>
                                            </h6>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Box>
        </>
    );
};

export default Register;
