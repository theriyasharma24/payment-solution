// import React, { useState, useContext, useEffect } from "react";
// import AlertContext from "../../context/alert/alertContext";
// import AuthContext from "../../context/auth/authContext";
// import { Link } from "react-router-dom";
// import SubmitButton from "../containers/SubmitButton";
// import styled from "styled-components";
// import breakpoints from "../../essentials/screensize";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//importing image
import Logo from "../../assets/theperception_whitelogo.svg";
import { LOGOUT } from '../../context/types';
// const ActionButton = styled(SubmitButton)`
//   && {
//     background: #0ec0e2;
//     color: white;
//     margin-top: 2em;
//     width: 50%;
//   }
// `;
// const LoginContainer = styled.div`
//   font-weight: 400;
//   justify-content: center;
//   align-items: center;
//   margin-inline: auto;
//   padding: 5%;
//   width: 40vw;
//   .h1 {
//     text-align: center;
//     font-size: 28px;
//     font-weight: 700;
//     margin-bottom: 2rem;
//   }
//   .h2 {
//     font-size: 18px;
//     margin-top: 1rem;
//   }
//   @media (max-width: ${breakpoints.sm}px) {
//     .h1 {
//       font-size: 22px;
//     }
//     .h2 {
//       font-size: 12px;
//     }
//     width: 60vw;
//   }
// `;
const Register = (props) => {
  // const alertContext = useContext(AlertContext);
  // const authContext = useContext(AuthContext);

  // const { setAlert } = alertContext;
  // const { register, error, clearErrors, isAuthenticated } = authContext;

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push("/");
  //   }

  //   if (error === "User already exists") {
  //     setAlert(error, "danger");
  //     clearErrors();
  //   }
  //   // eslint-disable-next-line
  // }, [error, isAuthenticated, props.history]);

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });

  // const { name, email, password, password2 } = user;

  // const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (name === "" || email === "" || password === "") {
  //     setAlert("Please enter all fields", "danger");
  //   } else if (password !== password2) {
  //     setAlert("Passwords do not match", "danger");
  //   } else {
  //     register({
  //       name,
  //       email,
  //       password,
  //     });
  //   }
  // };

  return (
    
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{backgroundColor:"orange"}}>
          <h1>Register</h1>
        </Grid>
        
        <Grid item xs={12} style={{backgroundColor:"yellow"}}>
        <Grid container spacing={2}>
          
          <Grid item xs={6} style={{backgroundColor:"white"}}>
          <img
                          src={Logo}
                          alt="The Perception Shop"
                          className="logo"
                        ></img>{" "}
        </Grid>
        <Grid item xs={6} style={{backgroundColor:"white"}}>
        <Grid container spacing={2}>
        <Grid item xs={6} style={{backgroundColor:"white"}}>
        <Grid item xs={6} style={{backgroundColor:"white"}}>
        </Grid>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      // autoComplete="off"
    >
      <TextField id="outlined" label="Name" variant="outlined" />
      <TextField id="outlined" label="Email-id" variant="outlined" />
      <TextField id="outlined" label="Password" variant="outlined" />
      <TextField id="outlined" label="Confirm Password" variant="outlined" />
        
    

    </Box>
    <Stack spacing={6} direction="row">
      
      <Button variant="contained">REGISTER</Button>
      
    </Stack>
  
        </Grid>
        </Grid>
        </Grid>
       </Grid>
       </Grid>
       </Grid>
      </Box>
      // {window.dataLayer?.push({ event: "register" })}
      // <LoginContainer>
      //   <div className="text-primary h1">
      //     REGISTER
      //     <span className="dark h1"> ACCOUNT</span>{" "}
      //   </div>
      //   <form onSubmit={onSubmit}>
      //     <div className="form-group">
      //       <label htmlFor="name">Name</label>
      //       <input
      //         id="name"
      //         type="textarea"
      //         name="name"
      //         value={name}
      //         onChange={onChange}
      //         required
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="email">Email Address</label>
      //       <input
      //         id="email"
      //         type="email"
      //         name="email"
      //         value={email}
      //         onChange={onChange}
      //         required
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="password">Password</label>
      //       <input
      //         id="password"
      //         type="password"
      //         name="password"
      //         value={password}
      //         onChange={onChange}
      //         required
      //         minLength="6"
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="password2">Confirm Password</label>
      //       <input
      //         id="password2"
      //         type="password"
      //         name="password2"
      //         value={password2}
      //         onChange={onChange}
      //         required
      //         minLength="6"
      //       />
      //     </div>
      //     <div style={{ textAlign: "center" }}>
      //       <ActionButton type="submit">Register</ActionButton>
      //     </div>
      //   </form>
      //   <div className="dark h2 " style={{ textAlign: "center" }}>
      //     Already have an account?
      //     <Link to="/login">
      //       <span className="text-primary "> LOGIN</span>
      //     </Link>
      //   </div>
      // </LoginContainer>
    
  );
};

export default Register;
