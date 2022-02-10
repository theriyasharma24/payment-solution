import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import SubmitButton from "../containers/SubmitButton";
import Button from "@mui/material/Button";
import colors from "../../essentials/colors";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import CardActions from "@mui/material/CardActions";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import SaveIcon from "@mui/icons-material/Save";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import EventCard from "../containers/EventCard";
const NavButton = styled(Button)`
  && {
    background-color: ${colors.primary};
    border-radius: 0px 12px 12px 0px;
  }
`;

const Notification = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={9} justifyContent="right">
        <Grid item xs={6} md={2}>
          <SubmitButton
            fullWidth="true"
            style={{ backgroundColor: "#6CA382", color: "white" }}
          >
            NOTIFICATION
          </SubmitButton>
        </Grid>
        <Grid item xs={6} md={2}>
          <SubmitButton
            fullWidth="true"
            style={{ backgroundColor: "#FAD0D0", color: "black" }}
          >
            REMINDER
          </SubmitButton>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <NavButton
            fullWidth="true"
            style={{ marginBottom: "1rem", justifyContent: "left" }}
          >
            <Typography color="white" p={1} pl={3}>
              <HomeIcon />
              Home
            </Typography>
          </NavButton>
          <NavButton
            fullWidth="true"
            style={{ marginBottom: "1rem", justifyContent: "left" }}
          >
            <Typography color="white" p={1} pl={3}>
              <DynamicFeedIcon /> Client Feed
            </Typography>
          </NavButton>
          <NavButton
            fullWidth="true"
            style={{ marginBottom: "1rem", justifyContent: "left" }}
          >
            <Typography color="white" p={1} pl={3}>
              <PaymentIcon />
              Payment
            </Typography>
          </NavButton>
          <NavButton
            fullWidth="true"
            style={{ marginBottom: "1rem", justifyContent: "left" }}
          >
            <Typography color="white" p={1} pl={3}>
              <PersonIcon />
              Profile
            </Typography>
          </NavButton>
        </Grid>
        <Grid item xs={6} md={9}>
          <Grid container>
            <AddCircleOutlineIcon />
            ADD NEW
          </Grid>
          <Grid container p={3} spacing={1}>
            <Grid item xs={9} md={6}>
              <EventCard />
            </Grid>
            <Grid item xs={9} md={6}>
              <EventCard />
            </Grid>
            <Grid item xs={9} md={6}>
              <EventCard />
            </Grid>
            <Grid item xs={9} md={6}>
              <EventCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Notification;
