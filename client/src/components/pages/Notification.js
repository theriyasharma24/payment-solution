import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthContext from "../../context/auth/authContext";
import styled from "styled-components";
import SubmitButton from "../containers/SubmitButton";

const Notification = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6}
          mr={8}
          md={2}
          style={{
            backgroundColor: "#95D554",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
          }}
        >
          <SubmitButton
            onclick="myfunction()"
            style={{ backgroundColor: "#6CA382" }}
          >
            NOTIFICATION
          </SubmitButton>
        </Grid>
        <Grid item xs={6} md={2} style={{ backgroundColor: "#95D554" }}>
          <SubmitButton
            onclick="myfunction()"
            style={{ backgroundColor: "#FAD0D0" }}
          >
            REMINDER
          </SubmitButton>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={4} style={{ backgroundColor: "#FAD0D0" }}>
          <Box>
            <div style={{ backgroundColor: "#D72631" }}>
              <p>EVENT:</p>
              <p>Event Name:</p>
              <p>Time of Event:</p>
              <p>Time to Notify:</p>
              <p>Date of Event:</p>
              <p>Venue of Event:</p>
            </div>
            <div>
              <SubmitButton
                onclick="myfunction()"
                style={{ backgroundColor: "#FAD0D0" }}
              >
                CANCEL
              </SubmitButton>
              <SubmitButton
                onclick="myfunction()"
                style={{ backgroundColor: "#FAD0D0" }}
              >
                SAVE
              </SubmitButton>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} md={8} style={{ backgroundColor: "green" }}>
          <p>xs=6 md=4</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Notification;
