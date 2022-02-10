import React, { useContext } from "react";
// import * as React from 'react';
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { ActionButton } from "@mui/material";
import colors from "../../essentials/colors";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Card, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
//importing image
import agent from "../../assets/agents.jpeg";

const LabelButton = styled(Button)`
  && {
    background-color: ${colors.orange};
  }
`;

const AgentDescription = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={12} ml={4}>
          <Typography variant="h3" mb={4}>
            Agent Information
          </Typography>
        </Grid>
      </Grid>

      <Grid container pl={5} pr={5}>
        <Grid item md={5}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="190"
              image={agent}
              alt="agent-pic"
            />
            <CardActions>
              <label htmlFor="icon-button-file">
                {/* <input accept="image/*" id="icon-button-file" type="file" /> */}
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={8} md={7}>
          <Grid
            container
            justifyContent="space-aroud"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={8} md={3}>
              <h3>Name: </h3>
            </Grid>
            <Grid item xs={8} md={9}>
              Akshta
            </Grid>
            <Grid item xs={8} md={3}>
              <h3>Address: </h3>
            </Grid>
            <Grid item xs={8} md={9}>
              R-456 A, Gaziabad, Uttar Pradesh
            </Grid>
            <Grid item xs={8} md={3}>
              <h3>Pan No. : </h3>
            </Grid>
            <Grid item xs={8} md={9}>
              AFJYT1354
            </Grid>
            <Grid item xs={8} md={3}>
              <h3>Contact No. : </h3>
            </Grid>
            <Grid item xs={8} md={9}>
              +91 4566856231
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        mt={6}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={12} md={3}>
          <LabelButton fullWidth="true" variant="text">
            <Typography color="white" p={4}>
              Client's List
            </Typography>
          </LabelButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <LabelButton fullWidth="true">
            <Typography color="white" p={4}>
              Payment Transactions
            </Typography>
          </LabelButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <LabelButton fullWidth="true">
            <Typography color="white" p={4}>
              Reminders
            </Typography>
          </LabelButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgentDescription;
