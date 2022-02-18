import React, { useState, useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AuthContext from "../../context/auth/authContext";
import { useLocation } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
//importing image
import Agent from "../../assets/agents.jpeg";
import { LOGOUT } from "../../context/types";
import styled from "styled-components";
import breakpoints from "../../essentials/screensize";
import "./Login.css";
import { Link } from "react-router-dom";
import SubmitButton from "../containers/SubmitButton";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  padding-left: 4rem;
  @media (max-width: ${breakpoints.sm}px) {
    padding-left: 1.5rem;
  }
`;

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
const Login = (props) => {
//   let navigate = useNavigate();
//   const alertContext = useContext(AlertContext);
//   const authContext = useContext(AuthContext);
//   const { setAlert } = alertContext;
//   const { login, error, clearErrors, isAuthenticated } = authContext;
//   // const location = useLocation();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/");
//     } else {
//       navigate("/login");
//     }
//     if (error === "Invalid Credentials") {
//       setAlert(error, "danger");
//       clearErrors();
//     }
//     // eslint-disable-next-line
//   }, [error, isAuthenticated, props.history]);

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = user;

//   const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       setAlert("Please fill in all fields", "danger");
//     } else {
//       login({
//         email,
//         password,
//       });
//     }
//   };

  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <h1>Register</h1>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src={Agent}
                alt="The Perception Shop"
                className="logo"
                height="440"
                width="100%"
              ></img>{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <Grid container > */}
              <Grid item xs={12} md={12}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1 },
                  }}
                  noValidate
                  // autoComplete="off"
                >
                  <TextField
                    id="outlined"
                    label="Name"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <TextField
                    id="outlined"
                    label="Email-id"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <TextField
                    id="outlined"
                    label="Password"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <TextField
                    id="outlined"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth="true"
                  />
                  <Stack spacing={6} direction="row">
    
    <Button variant="contained">Login</Button>
    
  </Stack>
                </Box>
              </Grid>
              {/* </Grid> */}
            </Grid>
            
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  </Container>
//     <>
//       {/* {window.dataLayer?.push({ event: "login" })} */}
//       <LoginContainer>
//         <div className="dark h1">
//           ACCOUNT
//           <span className="text-primary h1"> LOGIN</span>{" "}
//         </div>
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={email}
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               name="password"
//               value={password}
//               onChange={onChange}
//               required
//             />
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <ActionButton type="submit">Login</ActionButton>
//           </div>
//         </form>
//         <div className="dark h2 " style={{ textAlign: "center" }}>
//           Do not have an account already?
//           <Link to="/register">
//             <span className="text-primary "> REGISTER</span>
//           </Link>
//         </div>
//       </LoginContainer>
//     </>
//   );
  )
};

export default Login;
