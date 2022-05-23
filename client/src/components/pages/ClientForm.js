import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import SubmitButton from '../containers/SubmitButton';

import ClientrdContext from '../../context/clientrd/clientrdContext';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import styled from 'styled-components';
import Message from '../Message';
import Progress from '../Progress';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
const ActionButton = styled(SubmitButton)`
    && {
        background: #0ec0e2;
        color: black;
        margin-top: 2em;
        width: 60%;
    }
`;

const ClientForm = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const [file, setFile] = useState('');
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [uploadPercentageSign, setUploadPercentageSign] = useState(0);

    const [clientrd, setClientrd] = useState({
        name: '',
        aadhaar: '',
        pan: '',
        contact: '',
        email: '',
        address: '',
        amount: '',
        paymentstatus: 'Unpaid',
        signature: '',
        photo: ''
    });

    let navigate = useNavigate();
    const {
        name,
        aadhaar,
        pan,
        contact,
        email,
        address,
        amount,
        paymentstatus,
        signature,
        photo
    } = clientrd;

    const clientrdContext = useContext(ClientrdContext);
    const { addClientrd, getClientrds, clientrds } = clientrdContext;

    const onImgChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setClientrd({
            ...clientrd,
            signature: file
        });
    };

    const onUploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        // console.log('formData', file);
        let res;
        try {
            {
                file
                    ? (res = await axios.post('/upload', formData, {
                          headers: {
                              'Content-Type': 'multipart/form-data'
                          },
                          onUploadProgress: (progressEvent) => {
                              setUploadPercentageSign(
                                  parseInt(
                                      Math.round(
                                          (progressEvent.loaded * 100) /
                                              progressEvent.total
                                      )
                                  )
                              );
                          }
                      }))
                    : alert('No file selected');
            }

            // Clear percentage
            setTimeout(() => setUploadPercentageSign(0), 10000);
            console.log('data:', res.data);
            const { secure_url } = res.data;
            setClientrd({ ...clientrd, signature: secure_url });
        } catch (err) {
            console.log('Error', err);
        }
    };

    //for photo upload

    const onImgChangePhoto = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setClientrd({
            ...clientrd,
            photo: file
        });
    };
    const onUploadImagePhoto = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        // console.log('formData', file);
        let res;
        try {
            {
                file
                    ? (res = await axios.post('/upload', formData, {
                          headers: {
                              'Content-Type': 'multipart/form-data'
                          },
                          onUploadProgress: (progressEvent) => {
                              setUploadPercentage(
                                  parseInt(
                                      Math.round(
                                          (progressEvent.loaded * 100) /
                                              progressEvent.total
                                      )
                                  )
                              );
                          }
                      }))
                    : alert('No file selected');
            }

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
            console.log('data:', res.data);
            const { secure_url } = res.data;
            setClientrd({ ...clientrd, photo: secure_url });
        } catch (err) {
            console.log('Error', err);
        }
    };

    const onChange = (m) => {
        setClientrd({ ...clientrd, [m.target.name]: m.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('before inside clientrd on submit', clientrd);
        addClientrd(clientrd);
        getClientrds();
        console.log('inside clientrd on submit', clientrds);
        navigate('/paymentsummary');
    };
    return (
        <>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit} style={{ textAlign: 'center' }}>
                <div>
                    <h3> CLIENT FORM</h3>
                    <div style={{ marginBottom: '2rem' }}>
                        Welcome <h1>{user && user.name}</h1>
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
                                    label="Name"
                                    type="text"
                                    value={name}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="contact-input"
                                    name="contact"
                                    label="Phone Number"
                                    type="number"
                                    value={contact}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    id="email-input"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={onChange}
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
                                    label="Pan Number"
                                    type="string"
                                    value={pan}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="adhaar-input"
                                    name="aadhaar"
                                    label="Aadhaar Number"
                                    type="number"
                                    value={aadhaar}
                                    onChange={onChange}
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
                                    id="address-input"
                                    name="address"
                                    label="Address"
                                    type="text"
                                    value={address}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    id="amount"
                                    name="amount"
                                    label="Amount"
                                    type="number"
                                    value={amount}
                                    onChange={onChange}
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            style={{
                                marginBottom: '2rem'
                            }}
                        >
                            <Grid item xs={12} md={5}>
                                <Grid
                                    container
                                    style={{
                                        // backgroundColor: 'pink',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={8}
                                        style={{
                                            // backgroundColor: 'orange',
                                            paddingInline: '1rem'
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="120vh"
                                            image={photo}
                                            style={{
                                                borderRadius: 12,
                                                resizeMode: 'contain'
                                            }}
                                        />
                                        <div className="form-group">
                                            <label
                                                htmlFor="photo"
                                                style={{ textAlign: 'left' }}
                                            >
                                                Photo
                                            </label>
                                            <input
                                                type="file"
                                                id="customFile"
                                                onChange={onImgChangePhoto}
                                                name="photo"
                                            />
                                        </div>
                                        <Progress
                                            percentage={uploadPercentage}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        style={{
                                            // backgroundColor: 'blue',
                                            textAlign: 'right'
                                        }}
                                    >
                                        <ActionButton
                                            style={{
                                                background:
                                                    'rgba(149, 213, 84)',
                                                color: 'black'
                                            }}
                                            variant="contained"
                                            component="label"
                                            color="primary"
                                            onClick={onUploadImagePhoto}
                                        >
                                            Upload
                                        </ActionButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Grid
                                    container
                                    style={{
                                        // backgroundColor: 'pink',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={8}
                                        style={{
                                            // backgroundColor: 'orange',
                                            paddingInline: '1rem'
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="120vh"
                                            image={signature}
                                            style={{
                                                borderRadius: 12,
                                                resizeMode: 'contain'
                                            }}
                                        />
                                        <div className="form-group">
                                            <label
                                                htmlFor="photo"
                                                style={{ textAlign: 'left' }}
                                            >
                                                Signature
                                            </label>
                                            <input
                                                type="file"
                                                id="customFile"
                                                onChange={onImgChange}
                                                name="singature"
                                            />
                                        </div>
                                        <Progress
                                            percentage={uploadPercentageSign}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        style={{
                                            // backgroundColor: 'blue',
                                            textAlign: 'right'
                                        }}
                                    >
                                        <ActionButton
                                            style={{
                                                background:
                                                    'rgba(149, 213, 84)',
                                                color: 'black'
                                            }}
                                            variant="contained"
                                            component="label"
                                            color="primary"
                                            onClick={onUploadImage}
                                        >
                                            Upload
                                        </ActionButton>
                                    </Grid>
                                </Grid>
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
export default ClientForm;
