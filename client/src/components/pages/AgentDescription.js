import { useContext } from 'react';
// import * as React from 'react';
// import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { ActionButton } from "@mui/material";
import colors from '../../essentials/colors';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Card, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
//importing image
import agent from '../../assets/agents.jpeg';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SnoozeIcon from '@mui/icons-material/Snooze';
import { useNavigate, useLocation } from 'react-router-dom';

const LabelButton = styled(Button)`
    && {
        background-color: ${colors.orange};
    }
`;

const AgentDescription = (props) => {
    let navigate = useNavigate();
    const onClickPaymentTrans = () => {
        navigate('/paymentsummary');
    };
    const onClickNotifications = () => {
        navigate('/Notification');
    };
    const location = useLocation();
    console.log(location.state);
    let agent = location.state;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12} md={12} ml={4}>
                    <Typography variant="h3" mb={4}>
                        Agent Information
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                pl={5}
                pr={5}
                col={12}
                justifyContent="space-around"
            >
                <Grid item xs={12} md={3} mb={2}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="190"
                            image={agent.photo}
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

                <Grid item xs={12} md={8}>
                    <Grid
                        container
                        justifyContent="space-aroud"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item xs={6} md={3}>
                            <h3>Name: </h3>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            {agent.name}
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <h3>Address: </h3>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            {agent.address}
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <h3>Pan No. : </h3>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            {agent.pan}
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <h3>Contact No. : </h3>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            {agent.contact}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={1}
                mt={2}
                alignItems="center"
                justifyContent="space-around"
            >
                <Grid item xs={12} md={3}>
                    <LabelButton fullWidth={true}>
                        <Typography color="white" p={4}>
                            <DescriptionIcon /> Client's List
                        </Typography>
                    </LabelButton>
                </Grid>
                <Grid item xs={12} md={3}>
                    <LabelButton fullWidth={true} onClick={onClickPaymentTrans}>
                        <Typography color="white" p={4}>
                            <ReceiptIcon />
                            Payment Transactions
                        </Typography>
                    </LabelButton>
                </Grid>
                <Grid item xs={12} md={3}>
                    <LabelButton
                        fullWidth={true}
                        onClick={onClickNotifications}
                    >
                        <Typography color="white" p={4}>
                            <SnoozeIcon /> Notifications
                        </Typography>
                    </LabelButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AgentDescription;
