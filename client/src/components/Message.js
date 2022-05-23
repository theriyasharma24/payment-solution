import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

import Grid from '@mui/material/Grid';
import colors from '../essentials/colors';

const Message = ({ msg }) => {
    return (
        <>
            {msg === 'File Uploaded' ? (
                <Grid
                    container
                    p={2}
                    justifyContent="center"
                    justifySelf="center"
                    style={{
                        backgroundColor: `${colors.neonGreen}`,
                        color: 'black',
                        alignItems: 'center'
                    }}
                >
                    {msg}
                    <CheckIcon />
                </Grid>
            ) : (
                <Grid
                    container
                    p={2}
                    justifyContent="center"
                    justifySelf="center"
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        alignItems: 'center'
                    }}
                >
                    {msg}
                    <CheckIcon />
                </Grid>
            )}
        </>
    );
};

Message.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Message;
