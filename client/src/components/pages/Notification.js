import React, { useContext } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AuthContext from "../../context/auth/authContext";

const Notification = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={8} 
            style={{backgroundColor:"blue"}}
            >
        <p>xs=6 md=8</p>
      </Grid>
      <Grid item xs={6} md={4}
            style={{backgroundColor:"red"}}
            >
        <p>xs=6 md=4</p>
      </Grid>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={6} md={4} 
            style={{backgroundColor:"blue"}}
            >
        <p>xs=6 md=8</p>
      </Grid>
      <Grid item xs={6} md={8}
            style={{backgroundColor:"red"}}
            >
        <p>xs=6 md=4</p>
      </Grid>
      </Grid>
     
  </Box> 
  );
};

export default Notification ;
