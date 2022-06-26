import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../containers/SubmitButton';
import styled from 'styled-components';

const ActionButton = styled(SubmitButton)`
    && {
        background: #0ec0e2;
        color: black;
        margin-top: 2em;
        width: 60%;
    }
`;

const FormNotification = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
                <div>
                    <h3> NEW NOTIFICATION FORM</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        Welcome <h1></h1>
                    </div>

                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        textalign="center"
                        direction="column"
                    >
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{ marginBottom: '2rem' }}
                        >
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="name-input"
                                    name="name"
                                    label="Event Title"
                                    type="text"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="contact-input"
                                    name="contact"
                                    type="date"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="email-input"
                                    name="time"
                                    label="Event Time"
                                    type="time"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{ marginBottom: '2rem' }}
                        >
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="pan-input"
                                    name="pan"
                                    label="Notification Time"
                                    type="time"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="adhaar-input"
                                    name="eventdescription"
                                    label="Event Description"
                                    type="string"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center">
                            <ActionButton
                                type="submit"
                                style={{
                                    background: 'rgba(149, 213, 84)'
                                }}
                            >
                                Submit
                            </ActionButton>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </>
    );
};
export default FormNotification;
