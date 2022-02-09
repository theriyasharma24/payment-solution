import React, { useContext } from "react";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
</style>

import AuthContext from "../../context/auth/authContext";

const AgentDescription = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} m={2} style={{textAlign:'center'}}>
        <Typography variant="h3"  style={{ backgroundColor: "#95D554" }}>
             Agent Information
            </Typography>
        </Grid>

        <Grid container spacing={1} p={2} m={2} alignItems='center' justifyContent='center' style={{ backgroundColor: "#FF6D41" , font-family: 'Poppins', sans-serif} }>
          <Grid item xs={4} md={5} m={1}>
            <img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__480.jpg"
              alt="Our Agent"
            ></img>
          </Grid>
          <Grid item xs={8} md={5} style={{ backgroundColor: "#FF6D41" }} p={2}>
            <Typography variant="h5" component="h2">
              Name:
            </Typography>

            <Typography variant="h5" component="h2">
              Address:
            </Typography>

            <Typography variant="h5" component="h2">
              PAN No.:
            </Typography>

            <Typography variant="h5" component="h2">
              Contact No.:
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} m={2} alignItems='center' justifyContent='center'>
          <Grid item xs={4} md={3} m={1} style={{ backgroundColor: "#484545" }}>
            <Typography variant="button" component="h2">
              Client's List
            </Typography>
          </Grid>
          <Grid item xs={4} md={3} m={1} style={{ backgroundColor: "#484545" }}>
            <Typography variant="button" component="h2">
              Payment's Transaction
            </Typography>
          </Grid>
          <Grid item xs={4} md={3} m={1} style={{ backgroundColor: "#484545" }}>
            <Typography variant="button" component="h2">
              Reminders
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgentDescription;
