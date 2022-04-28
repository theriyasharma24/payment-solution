import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
const defaultValues = {
    name: '',
    age: 0,
    gender: '',
    os: '',
    favoriteNumber: 0
};
const ClientForm = () => {
    return (
        <form>
            <p style={{ textAlign: 'center' }}>
                <h3> CLIENT FORM</h3>
                <br></br>
                <Grid
                    container
                    alignItems="left"
                    justify="center"
                    direction="column"
                    style={{ marginLeft: '50px' }}
                >
                    <Grid item>
                        Name
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '180px'
                            }}
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                        />
                    </Grid>
                    <Grid item>
                        Adhaar Number
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '100px'
                            }}
                            id="adhaar-input"
                            name="adhaar"
                            label="Adhaar Number"
                            type="number"
                        />
                    </Grid>
                    <Grid item>
                        PAN Number
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '130px'
                            }}
                            id="pan-input"
                            name="pan"
                            label="Pan Number"
                            type="number"
                        />
                    </Grid>
                    <Grid item>
                        Phone Number
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '110px'
                            }}
                            id="phone-input"
                            name="phone"
                            label="Phone Number"
                            type="number"
                        />
                    </Grid>
                    <Grid item>
                        Email Id
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '165px'
                            }}
                            text="hi"
                            id="email-input"
                            name="email"
                            label="Email Address"
                            type="email"
                        />
                    </Grid>
                    <Grid item>
                        Address
                        <TextField
                            style={{
                                position: 'relative',
                                bottom: '20px',
                                marginLeft: '165px'
                            }}
                            id="address-input"
                            name="address"
                            label="Address"
                            type="text"
                        />
                    </Grid>
                    <Grid item style={{ marginLeft: '-8vw' }}>
                        Photo
                        <Button
                            style={{
                                marginLeft: '180px'
                            }}
                            variant="contained"
                            component="label"
                            color="primary"
                        >
                            {' '}
                            Upload
                            <input type="file" hidden />
                        </Button>
                    </Grid>
                    <br></br>
                    <Grid item style={{ marginLeft: '-8vw' }}>
                        Signature
                        <Button
                            style={{
                                marginLeft: '150px'
                            }}
                            variant="contained"
                            component="label"
                            color="primary"
                        >
                            {' '}
                            Upload
                            <input type="file" hidden />
                        </Button>
                    </Grid>
                    <br></br>
                    <Grid item style={{ marginLeft: '-8vw' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ width: '30px' }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </p>
        </form>
    );
};
export default ClientForm;
