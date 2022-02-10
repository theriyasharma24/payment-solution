import React from "react";
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
import CardActions from "@mui/material/CardActions";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SaveIcon from "@mui/icons-material/Save";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const AddEventCard = styled(Card).attrs(() => ({
  elevation: 2,
}))`
  padding: 1.5%;
  background-color: ${colors.orange};
`;
const EventCard = () => {
  return (
    <AddEventCard
      sx={{ width: "100%", marginTop: "0.5rem" }}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <CardContent>
        <Grid container alignItems="center">
          <Grid
            item
            xs={6}
            md={12}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: 5,
            }}
          >
            <h3>Event Title </h3>
          </Grid>
          <Grid item xs={6} md={5}>
            <h4>Event Date: </h4>
          </Grid>
          <Grid item xs={6} md={7}>
            24-12-2022
          </Grid>
          <Grid item xs={6} md={5}>
            <h4>Event Time : </h4>
          </Grid>
          <Grid item xs={6} md={7}>
            12:30 PM
          </Grid>
          <Grid item xs={6} md={5}>
            <h4>Notification Time : </h4>
          </Grid>
          <Grid item xs={6} md={7}>
            12:00 PM
          </Grid>
        </Grid>{" "}
      </CardContent>
      <CardActions style={{ float: "right" }}>
        <Button size="small" style={{ backgroundColor: "#FAD0D0" }}>
          <HighlightOffIcon /> Cancel
        </Button>
        <Button size="small" style={{ backgroundColor: "#FAD0D0" }}>
          <SaveIcon /> Save
        </Button>
      </CardActions>
    </AddEventCard>
  );
};

export default EventCard;
