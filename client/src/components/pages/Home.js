import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import home from '../../assets/home.png';

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
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
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={6}>
                        <div>
                            <img
                                style={{
                                    width: '116%',
                                    position: 'relative',
                                    right: '80px',
                                    bottom: '30px'
                                }}
                                src={home}
                                alt="this is car image"
                            />
                        </div>
                    </Grid>
                    <Grid item style={{ textAlign: 'center' }} xs={12} md={6}>
                        <div>
                            <h1
                                style={{
                                    color: 'darkgreen',
                                    fontWeight: '800',
                                    textAlign: 'center',
                                    marginLeft: '80px'
                                }}
                            >
                                Log in to your account
                            </h1>
                            <Button
                                style={{
                                    backgroundColor: 'darkgreen',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    width: '240px',
                                    margin: '100px',
                                    marginLeft: '200px',
                                    textAlign: 'center'
                                }}
                            >
                                Log In{' '}
                            </Button>
                            <br></br>
                            <Button
                                style={{
                                    backgroundColor: 'darkgreen',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    width: '240px',
                                    margin: '100px',
                                    marginTop: '-5vw',
                                    marginLeft: '200px',
                                    textAlign: 'center'
                                }}
                            >
                                Sign Up{' '}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
